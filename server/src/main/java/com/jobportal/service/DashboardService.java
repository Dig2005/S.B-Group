package com.jobportal.service;



import com.jobportal.entity.Booking;
import com.jobportal.repository.BookingRepository;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.*;

@Service
public class DashboardService {

    private final BookingRepository bookingRepository;

    public DashboardService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public Map<String, Object> getDashboardData() {

        List<Booking> bookings = bookingRepository.findAll();

        LocalDate today = LocalDate.now();

        Map<String, Object> dashboard = new HashMap<>();

        // --------------------------------
        // TOTAL BOOKINGS
        // --------------------------------

        long totalBookings = bookings.size();

        dashboard.put("totalBookings", totalBookings);


        // --------------------------------
        // CURRENTLY OCCUPIED
        // --------------------------------

        long currentlyOccupied = bookings.stream()
                .filter(b -> !"CANCELLED".equalsIgnoreCase(b.getStatus()))
                .filter(b ->
                        b.getCheckIn() != null &&
                                b.getCheckOut() != null &&
                                !today.isBefore(b.getCheckIn()) &&
                                today.isBefore(b.getCheckOut())
                )
                .count();

        dashboard.put("currentlyOccupied", currentlyOccupied);


        // --------------------------------
        // TODAY'S CHECK OUTS
        // --------------------------------

        long todaysCheckouts = bookings.stream()
                .filter(b -> !"CANCELLED".equalsIgnoreCase(b.getStatus()))
                .filter(b ->
                        b.getCheckOut() != null &&
                                b.getCheckOut().equals(today)
                )
                .count();

        dashboard.put("todaysCheckouts", todaysCheckouts);


        // --------------------------------
        // UPCOMING CHECK INS
        // --------------------------------

        long upcomingCheckIns = bookings.stream()
                .filter(b -> !"CANCELLED".equalsIgnoreCase(b.getStatus()))
                .filter(b ->
                        b.getCheckIn() != null &&
                                b.getCheckIn().isAfter(today)
                )
                .count();

        dashboard.put("upcomingCheckIns", upcomingCheckIns);


        // --------------------------------
        // CANCELLATIONS
        // --------------------------------

        long cancellations = bookings.stream()
                .filter(b ->
                        "CANCELLED".equalsIgnoreCase(b.getStatus())
                )
                .count();

        dashboard.put("cancellations", cancellations);


        // --------------------------------
        // PENDING REQUESTS
        // --------------------------------

        long pendingRequests = bookings.stream()
                .filter(b ->
                        "PENDING".equalsIgnoreCase(b.getStatus())
                )
                .count();

        dashboard.put("pendingRequests", pendingRequests);


        // --------------------------------
        // ROOM OCCUPANCY
        // --------------------------------

        Map<String, Long> roomOccupancy = new LinkedHashMap<>();

        roomOccupancy.put(
                "Deluxe Room",
                countRoom(bookings, "Deluxe Room")
        );

        roomOccupancy.put(
                "Executive Suite",
                countRoom(bookings, "Executive Suite")
        );

        roomOccupancy.put(
                "Family Room",
                countRoom(bookings, "Family Room")
        );

        roomOccupancy.put(
                "Single Room",
                countRoom(bookings, "Single Room")
        );

        dashboard.put("roomOccupancy", roomOccupancy);


        // --------------------------------
        // BOOKINGS THIS WEEK
        // --------------------------------

        Map<String, Long> weeklyBookings =
                getWeeklyBookings(bookings);

        dashboard.put("weeklyBookings", weeklyBookings);


        // --------------------------------
        // REVENUE
        // --------------------------------

        double revenue = bookings.stream()
                .filter(b ->
                        !"CANCELLED".equalsIgnoreCase(b.getStatus())
                )
                .mapToDouble(this::getRoomPrice)
                .sum();

        dashboard.put("revenue", revenue);


        return dashboard;
    }


    private long countRoom(
            List<Booking> bookings,
            String roomType
    ) {

        return bookings.stream()
                .filter(b ->
                        roomType.equalsIgnoreCase(
                                b.getRoomType()
                        )
                )
                .filter(b ->
                        !"CANCELLED".equalsIgnoreCase(
                                b.getStatus()
                        )
                )
                .count();
    }


    private Map<String, Long> getWeeklyBookings(
            List<Booking> bookings
    ) {

        Map<String, Long> result = new LinkedHashMap<>();

        result.put("Mon", 0L);
        result.put("Tue", 0L);
        result.put("Wed", 0L);
        result.put("Thu", 0L);
        result.put("Fri", 0L);
        result.put("Sat", 0L);
        result.put("Sun", 0L);

        LocalDate today = LocalDate.now();

        LocalDate monday =
                today.with(DayOfWeek.MONDAY);

        LocalDate sunday =
                monday.plusDays(6);

        for (Booking booking : bookings) {

            if (booking.getCheckIn() == null) {
                continue;
            }

            if (booking.getCheckIn().isBefore(monday) ||
                    booking.getCheckIn().isAfter(sunday)) {
                continue;
            }

            if ("CANCELLED".equalsIgnoreCase(
                    booking.getStatus())) {
                continue;
            }

            String day;

            switch (booking.getCheckIn().getDayOfWeek()) {

                case MONDAY:
                    day = "Mon";
                    break;

                case TUESDAY:
                    day = "Tue";
                    break;

                case WEDNESDAY:
                    day = "Wed";
                    break;

                case THURSDAY:
                    day = "Thu";
                    break;

                case FRIDAY:
                    day = "Fri";
                    break;

                case SATURDAY:
                    day = "Sat";
                    break;

                default:
                    day = "Sun";
            }

            result.put(
                    day,
                    result.get(day) + 1
            );
        }

        return result;
    }


    private double getRoomPrice(Booking booking) {

        String roomType = booking.getRoomType();

        if (roomType == null) {
            return 0;
        }

        switch (roomType.toLowerCase()) {

            case "deluxe room":
                return 5000;

            case "executive suite":
                return 8500;

            case "family room":
                return 7000;

            case "single room":
                return 3000;

            default:
                return 0;
        }
    }
}