package com.gongsp.db.repository;

import com.gongsp.db.entity.Meeting;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

public interface MeetingRepository extends JpaRepository<Meeting, Integer> {
    Optional<Meeting> findMeetingByMeetingSeq(Integer meetingSeq);

//    boolean existsMeetingByMeetingSeq(Integer meetingSeq);

//    Optional<List<Meeting>> findMeetingsByMeetingSeq(Integer meetingSeq, Pageable pageable);

    //    Page<Meeting> findAll(Pageable pageable);
    @Query(nativeQuery = true, value = "select * from tb_meeting " +
            "where meeting_seq not in " +
            "(select meeting_seq from tb_blacklist_meeting where user_seq = :userSeq) " +
            "order by meeting_seq desc limit :start, :spp ")
    List<Meeting> searchAll(@Param("start") Integer start, @Param("spp") Integer spp, @Param("userSeq") Integer userSeq);

    //    Optional<List<Meeting>> findByMeetingTitleContainingOrMeetingDescContaining(String meetingTitle, String meetingDesc, Pageable pageable);
    @Query(nativeQuery = true, value = "select * from tb_meeting " +
            "where category_seq = :categorySeq " +
            "and meeting_seq not in " +
            "(select meeting_seq from tb_blacklist_meeting where user_seq = :userSeq) " +
            "order by meeting_seq desc limit :start, :spp ")
    List<Meeting> searchByCategorySeq(@Param("categorySeq") Integer categorySeq, @Param("start") Integer start, @Param("spp") Integer spp, @Param("userSeq") Integer userSeq);
//    Optional<List<Meeting>> findByMeetingTitleContainingOrMeetingDescContainingAndCategorySeq(String meetingTitle, String meetingDesc, Integer categorySeq, Pageable pageable);

    @Query(nativeQuery = true, value = "select * from tb_meeting " +
            "where (meeting_title like %:key% or meeting_desc like %:key% ) " +
            "and meeting_seq not in " +
            "(select meeting_seq from tb_blacklist_meeting where user_seq = :userSeq) " +
            "order by meeting_seq desc limit :start, :spp ")
    List<Meeting> searchByKey(@Param("key") String key, @Param("start") Integer start, @Param("spp") Integer spp, @Param("userSeq") Integer userSeq);

    @Query(nativeQuery = true, value = "select * from tb_meeting " +
            "where (meeting_title like %:key% or meeting_desc like %:key% ) " +
            "and category_seq = :categorySeq " +
            "and meeting_seq not in " +
            "(select meeting_seq from tb_blacklist_meeting where user_seq = :userSeq) " +
            "order by meeting_seq desc limit :start, :spp ")
    List<Meeting> searchByKeyAndCategory(@Param("key") String key, @Param("categorySeq") Integer categorySeq, @Param("start") Integer start, @Param("spp") Integer spp, @Param("userSeq") Integer userSeq);
    boolean existsMeetingByHostSeq(Integer userSeq);
}