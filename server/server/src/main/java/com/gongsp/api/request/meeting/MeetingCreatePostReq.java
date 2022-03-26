package com.gongsp.api.request.meeting;

import lombok.Getter;
import lombok.Setter;
import org.springframework.lang.Nullable;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class MeetingCreatePostReq {
    private Integer categorySeq;
    private String meetingTitle;
    private String meetingDesc;
    @Nullable
    private MultipartFile meetingImg;
    private Short meetingCamType;
    private Short meetingMicType;
}
