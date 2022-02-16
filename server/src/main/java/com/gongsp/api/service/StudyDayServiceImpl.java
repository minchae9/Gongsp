package com.gongsp.api.service;

import com.gongsp.api.response.study.Day;
import com.gongsp.db.entity.Study;
import com.gongsp.db.entity.StudyDay;
import com.gongsp.db.repository.StudyDayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Service("studyDayService")
public class StudyDayServiceImpl implements StudyDayService {

    @Autowired
    StudyDayRepository studyDayRepository;

    @Override
    public Optional<StudyDay[]> getStudyDay(Integer studySeq) {
        return studyDayRepository.findAllByStudySeqOrderByDayNumber(studySeq);
    }

    @Override
    public void createStudyDays(List<Day> day, Integer studySeq) {
        StudyDay studyDay;
        for (Day d : day) {
            studyDay = new StudyDay();
            studyDay.setStudySeq(studySeq);
            studyDay.setDayNumber(d.getDayNumber());
            studyDay.setStartTime(d.getTimeStart());
            studyDay.setEndTime(d.getTimeEnd());
            studyDayRepository.save(studyDay);
        }
    }

    @Override
    public boolean isValidTime(Integer studySeq, LocalDate curDate, LocalTime curTime) {
        Integer today = curDate.getDayOfWeek().getValue();
        Optional<StudyDay[]> opStudyDays = getStudyDay(studySeq);
        if(!opStudyDays.isPresent())
            return false;
        boolean res = false;
        StudyDay[] studyDays = opStudyDays.get();
        for (StudyDay studyDay: studyDays) {
            if(studyDay.getDayNumber().equals(today)){
                LocalTime startTime = studyDay.getStartTime();
                if(startTime.getHour() >= curTime.getHour()){
                    if(startTime.getMinute() >= curTime.getMinute())
                        res = true;
                }
                break;
            }
        }
        return res;
    }
}
