package com.jobportal.controller;

import com.jobportal.entity.Booking;
import com.jobportal.repository.BookingRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {

    private final BookingRepository bookingRepository;

    public BookingController(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    // ==========================================
    // CREATE NEW BOOKING
    // ==========================================

    @PostMapping
    public ResponseEntity<Booking> createBooking(
            @RequestBody Booking booking
    ) {

        if (booking.getStatus() == null ||
                booking.getStatus().isEmpty()) {

            booking.setStatus("CONFIRMED");
        }

        if (booking.getTotalCost() == null) {

            double price = 0;

            if ("Deluxe Room".equals(booking.getRoomType())) {
                price = 5000;
            }
            else if ("Executive Room".equals(booking.getRoomType())) {
                price = 8500;
            }
            else if ("Family Room".equals(booking.getRoomType())) {
                price = 7000;
            }

            if (booking.getCheckIn() != null &&
                    booking.getCheckOut() != null) {

                long nights =
                        java.time.temporal.ChronoUnit.DAYS.between(
                                booking.getCheckIn(),
                                booking.getCheckOut()
                        );

                if (nights < 1) {
                    nights = 1;
                }

                booking.setTotalCost(price * nights);
            }
        }

        Booking savedBooking =
                bookingRepository.save(booking);

        return ResponseEntity.ok(savedBooking);
    }


    // ==========================================
    // GET ALL BOOKINGS
    // ==========================================

    @GetMapping
    public ResponseEntity<List<Booking>> getAllBookings() {

        List<Booking> bookings =
                bookingRepository.findAll();

        return ResponseEntity.ok(bookings);
    }


    // ==========================================
    // GET BOOKING BY ID
    // ==========================================

    @GetMapping("/{id}")
    public ResponseEntity<?> getBookingById(
            @PathVariable Long id
    ) {

        Optional<Booking> booking =
                bookingRepository.findById(id);

        if (booking.isPresent()) {
            return ResponseEntity.ok(booking.get());
        }

        return ResponseEntity
                .status(404)
                .body("Booking not found");
    }


    // ==========================================
    // VERIFY BOOKING
    // ==========================================

    @GetMapping("/verify")
    public ResponseEntity<?> verifyBooking(
            @RequestParam Long bookingId,
            @RequestParam String phone
    ) {

        Optional<Booking> booking =
                bookingRepository.findByIdAndPhone(
                        bookingId,
                        phone
                );

        if (booking.isPresent()) {
            return ResponseEntity.ok(booking.get());
        }

        return ResponseEntity
                .status(404)
                .body("Booking ID or Mobile Number is incorrect");
    }


    // ==========================================
    // DELETE BOOKING
    // ==========================================

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBooking(
            @PathVariable Long id
    ) {

        if (!bookingRepository.existsById(id)) {

            return ResponseEntity
                    .status(404)
                    .body("Booking not found");
        }

        bookingRepository.deleteById(id);

        return ResponseEntity.ok(
                "Booking deleted successfully"
        );
    }


    // ==========================================
    // CANCEL BOOKING
    // ==========================================

    @PutMapping("/cancel/{id}")
    public ResponseEntity<?> cancelBooking(
            @PathVariable Long id
    ) {

        Optional<Booking> existingBooking =
                bookingRepository.findById(id);

        if (existingBooking.isEmpty()) {

            return ResponseEntity
                    .status(404)
                    .body("Booking not found");
        }

        Booking booking =
                existingBooking.get();

        // Already cancelled
        if ("CANCELLED".equalsIgnoreCase(
                booking.getStatus())) {

            return ResponseEntity
                    .badRequest()
                    .body("Booking is already cancelled");
        }

        // Change status instead of deleting
        booking.setStatus("CANCELLED");

        Booking cancelledBooking =
                bookingRepository.save(booking);

        return ResponseEntity.ok(cancelledBooking);
    }


    // ==========================================
    // GET ACTIVE BOOKINGS
    // ==========================================

    @GetMapping("/active")
    public ResponseEntity<List<Booking>> getActiveBookings() {

        List<Booking> bookings =
                bookingRepository
                        .findByStatusNotIgnoreCase("CANCELLED");

        return ResponseEntity.ok(bookings);
    }
}