package com.gongsp.api.service;

import com.gongsp.api.request.meeting.MeetingCreatePostReq;
import com.gongsp.api.request.meeting.MeetingParameter;
import com.gongsp.api.response.meeting.MeetingRes;
import com.gongsp.db.entity.Meeting;
import com.gongsp.db.entity.MeetingOnair;
import io.openvidu.java.client.OpenVidu;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface MeetingService {
    //미팅룸 입실(session 연결)
    String getToken(OpenVidu openVidu, Integer userSeq, Meeting meeting);
    //미팅룸 퇴실(session 연결종료)
    String removeUser(String sessionName, String token, Integer meetingSeq);

    Optional<Meeting> getMeeting(Integer meetingSeq);
    void updateMeeting(Integer meetingSeq, int flag);
    List<MeetingRes> getMeetingList(MeetingParameter meetingParameter);
    void createMeeting(MeetingCreatePostReq meetingCreatePostReq, Integer userSeq, String uuidFileName);
}
