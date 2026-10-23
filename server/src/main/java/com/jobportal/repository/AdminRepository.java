package com.jobportal.repository;

import com.jobportal.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {

    Optional<Admin> findByAdminIdAndEmailAndPassword(
            String adminId,
            String email,
            String password
    );
}
