package com.gongsp.api.request.user;

import lombok.Getter;
import lombok.Setter;
import org.springframework.lang.Nullable;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class UserMeetingPatchReq {
    private int meetingSeq;
    private int categorySeq;
    private String meetingTitle;
    private String meetingDesc;
    @Nullable
    private MultipartFile meetingImg;
    private short meetingCamType;
    private short meetingMicType;
}
