package com.jobportal.repository;

import com.jobportal.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    Optional<Booking> findByIdAndPhone(Long id, String phone);

    List<Booking> findByCheckInBetween(
            LocalDate from,
            LocalDate to
    );
       /* List<Booking> findByCheckInBetweenAndStatusNot(
                LocalDate from,
                LocalDate to,
                String status
        );*/
       List<Booking> findByStatusNotIgnoreCase(String status);

    // Get bookings between dates excluding cancelled bookings
    List<Booking> findByCheckInBetweenAndStatusNotIgnoreCase(
            LocalDate from,
            LocalDate to,
            String status
    );
    }
