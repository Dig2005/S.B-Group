package com.jobportal.controller;

import com.jobportal.entity.Booking;
import com.jobportal.repository.BookingRepository;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.*;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:5173")
public class ReportController {

    private final BookingRepository bookingRepository;

    public ReportController(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @GetMapping("/bookings")
    public ResponseEntity<?> getBookingReport(

            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate from,

            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate to

    ) {

        if (from.isAfter(to)) {
            return ResponseEntity
                    .badRequest()
                    .body("From date cannot be after To date");
        }

        // ==========================================
        // GET ONLY ACTIVE BOOKINGS
        // CANCELLED BOOKINGS ARE EXCLUDED
        // =========================================
        List<Booking> bookings =
                bookingRepository.findByCheckInBetween(
                        from,
                        to
                );

        bookings = bookings.stream()
                .filter(booking ->
                        booking.getStatus() == null ||
                                !booking.getStatus().equalsIgnoreCase("CANCELLED")
                )
                .toList();

        int totalBookings = bookings.size();

        int totalGuests = 0;

        long totalNights = 0;

        double totalRevenue = 0;

        List<Map<String, Object>> bookingDetails =
                new ArrayList<>();

        for (Booking booking : bookings) {

            // ==========================================
            // GUESTS
            // ==========================================

            if (booking.getGuests() != null) {
                totalGuests += booking.getGuests();
            }

            // ==========================================
            // NIGHTS
            // ==========================================

            long nights = 0;

            if (
                    booking.getCheckIn() != null &&
                            booking.getCheckOut() != null
            ) {

                nights = ChronoUnit.DAYS.between(
                        booking.getCheckIn(),
                        booking.getCheckOut()
                );

                if (nights < 0) {
                    nights = 0;
                }
            }

            totalNights += nights;

            // ==========================================
            // REVENUE
            // ==========================================

            double cost = 0;

            if (booking.getTotalCost() != null) {

                cost = booking.getTotalCost();

            } else {

                double pricePerNight = 0;

                String room = booking.getRoomType();

                if (room != null) {

                    switch (room.toLowerCase()) {

                        case "deluxe room":
                            pricePerNight = 5000;
                            break;

                        case "executive suite":
                            pricePerNight = 8500;
                            break;

                        case "family room":
                            pricePerNight = 7000;
                            break;

                        case "single room":
                            pricePerNight = 3000;
                            break;

                        default:
                            pricePerNight = 0;
                    }
                }

                cost = pricePerNight * nights;
            }

            totalRevenue += cost;

            // ==========================================
            // TABLE ROW
            // ==========================================

            Map<String, Object> row =
                    new LinkedHashMap<>();

            row.put(
                    "bookingId",
                    "B" + String.format(
                            "%04d",
                            booking.getId()
                    )
            );

            row.put(
                    "guestName",
                    booking.getFullName()
            );

            row.put(
                    "checkIn",
                    booking.getCheckIn()
            );

            row.put(
                    "checkOut",
                    booking.getCheckOut()
            );

            row.put(
                    "roomType",
                    booking.getRoomType()
            );

            row.put(
                    "guests",
                    booking.getGuests()
            );

            row.put(
                    "nights",
                    nights
            );

            row.put(
                    "totalCost",
                    cost
            );

            bookingDetails.add(row);
        }

        // ==========================================
        // FINAL RESPONSE
        // ==========================================

        Map<String, Object> response =
                new LinkedHashMap<>();

        response.put(
                "from",
                from
        );

        response.put(
                "to",
                to
        );

        response.put(
                "totalBookings",
                totalBookings
        );

        response.put(
                "totalRevenue",
                totalRevenue
        );

        response.put(
                "totalGuests",
                totalGuests
        );

        response.put(
                "totalNights",
                totalNights
        );

        response.put(
                "bookings",
                bookingDetails
        );

        return ResponseEntity.ok(response);
    }
}