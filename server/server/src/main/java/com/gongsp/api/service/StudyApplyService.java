package com.gongsp.api.service;

import com.gongsp.db.entity.StudyApply;
import com.gongsp.db.entity.StudyApplyId;

import java.util.Optional;

public interface StudyApplyService {
    void createApplicant(StudyApplyId studyApplyId, String applyMessage);
    boolean existsStudyById(StudyApplyId studyApplyId);
}
