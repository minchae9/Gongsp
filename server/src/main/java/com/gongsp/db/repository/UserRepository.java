package com.gongsp.db.repository;

import com.gongsp.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findUserByUserEmail(String userEmail);
    Optional<User> findUserByUserSeq(Integer userSeq);
    Boolean existsUserByUserSeq(Integer userSeq);

    @Query(value = "SELECT COUNT(*) FROM tb_user;", nativeQuery = true)
    Integer getUserCount();
}