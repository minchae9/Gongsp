package com.gongsp.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Setter
@Getter
@Table(name = "tb_member_study")
public class StudyMember {

    @Id
    private Integer userSeq;
    @JsonIgnore
    private Integer studySeq;
    @Column(updatable = false, insertable = false)
    private String userNickname;
    @Column(name = "member_eject_count")
    private Integer ejectCount;
    @Column(name = "is_member_onair")
    private Boolean isOnAir;
    @Column(name = "user_img")
    private String userImage;

    public StudyMember(Integer userSeq, Integer studySeq, Integer ejectCount, Boolean isOnAir) {
        this.userSeq = userSeq;
        this.studySeq = studySeq;
        this.ejectCount = ejectCount;
        this.isOnAir = isOnAir;
    }

    public StudyMember() {
    }
}
