import React from "react";
import PlaceWork from "./PlaceWork";

const Place = () => {
  return (
    <section className="place">
      <div className="container">
        <h3 className="place__text">Опыт работы</h3>
        <div className="place__works">
          <PlaceWork
            year="2004-2005"
            title=" “2004-2005-жж Знание” окуу борборунда компьютердик сабаттуулук боюнча лектор."
          />
          <PlaceWork
            year="2005-2008 "
            title="2005-2008-жж “Жоробеков” ЖИде оператор, инженер программист."
          />
          <PlaceWork
            year="2008"
            title="2008-жылдын сентябрынан ОшМУнун Информатика кафедрасында окутуучу"
          />
          <PlaceWork
            year="2014-2016"
            title="2014-2016-жылдары ОшМУнун МИТ факультетинде магистратура бөлүмүнүң башчысы."
          />
          <PlaceWork
            year="2017-2018"
            title="2017-2018-жылдары “МКК Компаньон-Инвест” ЖЧК сында айкалыштыруучу-маркетолог."
          />
          <PlaceWork
            year="2015-2020"
            title="2015-2020-жылдары ОшМУнун МИТ факультетинин информатика кафедрасында ага куотуучу."
          />
          <PlaceWork
            year="2020-2021"
            title="2020-2021-жылдары ОшМУнун Кыргы-Түрк факультетинде кафедра башчысы, доцент."
          />
          <PlaceWork
            year="2021-2022"
            title="2021-2022-жылдыра ОшМУнун Эл аралык билим берүү программаларынын жогорку мектебинде программа жетекчи, доцент"
          />
          <PlaceWork
            year="2022"
            title="2022-жылдын сентябрь айынан бери ОшМУнун МИТ факультетинин КИ жана ИК кафадрасында доцент"
          />
        </div>
      </div>
    </section>
  );
};

export default Place;
