import React, { useEffect } from "react";
import AOS from "aos";
import shemaauto from "../assets/imgs/Shema-avto.jpg";

const Asosiy = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="main-container">
      <div className="main-page">
        <div className="left">
          <div
            data-aos-delay="50"
            className="title-aos"
            data-aos="fade-down-right"
            data-aos-duration="1000"
          >
            <b>Assalomu aleykum!</b>
          </div>
          <div
            className="title-aos"
            data-aos="fade-down-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <b>Xush kelibsiz!</b>
          </div>

          <br />
          <span
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="1000"
          >
            "TRANSPORT VOSITALARI MUHANDISLIGI"
          </span>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            kafedrasining rasmiy veb-saytiga .
          </p>
          <br />
          <p
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            Transport vositalari muhandisligi mamlakatlar uchun yuqori tezlikda,
            qulay va xavfsiz transport vositalarini ishlab chiqarishga yordam
            beradi.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            Shuningdek, biz ilmiy tadqiqotlar, amaliyotlar va loyihalar orqali
            transport vositalari sohasining yanada rivojlanishiga xizmat
            qilamiz.
          </p>
        </div>

        <div
          className="right"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <img src={shemaauto} alt="" />
        </div>
      </div>

      <div className="main-txt-page">
        <div className="main-title">
          <p data-aos="zoom-in" data-aos-duration="500">
            KIRISH
          </p>
        </div>
        <span
          data-aos="fade-in-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          {" "}
          Bugun qo’lga kiritayotgan barcha yutuq va marralarimizning omili va
          zamini bo’lgan, hammamizni, avvalo, bolalarimizning ongu tafakkurini,
          hayotga bo’lgan munosabatini tubdan o’zgartirgan “Kadrlar tayyorlash”
          milliy dasturi va “Ta’lim to’g’risida”gi qonunining o’rni va ahamiyati
          beqiyos bo’ldi.
        </span>
        <span
          data-aos="fade-in-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          {" "}
          Eski tizimning qolip va aqidalaridan holi bo’lgan, mustaqil
          fikrlaydigan va hayotga qaraydigan, Vatanimiz taqdiri va kelajagi
          uchun mas’uliyatni o’z zimmasiga olishga qodir kuch sifatida maydonga
          chiqayotgan bugungi yosh avlodimiz ayni shu dasturlarning, biz amalga
          oshirayotgan tarbiyaviy ishlarimizning mahsuli,
        </span>
        <span
          data-aos="fade-in-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          ijobiy ma’nodagi “portlash effekti”ning natijasi bo’ldi. Davlatimiz
          tomonidan farzandlar kamoloti yo’lida qilingan xayrli ishlarni sanab
          adog’iga yetib bo’lmaydi. Istiqlolning dastlabki yillarida ekilgan
          navnihol ko’chatlar bugun o’z mevasini bera boshlagani ham ayni
          haqiqat.
        </span>
        <span
          data-aos="fade-in-up"
          data-aos-delay="150"
          data-aos-duration="1000"
        >
          {" "}
          Bu ezgu tadbirlar, islohotlar yanada qat’iyat va izchillik bilan davom
          ettirilmoqda. Biroq millat ravnaqi, xalq farovonligiga erishishda
          faqat davlatning sa’y-harakatlarigina kifoya qilmaydi. Buning uchun
          yurtmizning har bir fuqarosi qaysi soha vakili va kim bo’lishidan
          qat’iy nazar, o’zining bunyodkorlik salohiyatini ishga solishi,
          islohotlar mohiyatini chuqur anglab yetishi, bu jarayonlarning faol
          ishtirokchisiga aylanishi lozim.
        </span>
        <span
          data-aos="fade-in-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          {" "}
          Prezidentimiz Shavkat Mirziyoevning 2016–yil yakunlari va 2022–yilga
          mo‘ljallangan iqtisodiy dasturning eng muhim ustuvor yo‘nalishlariga
          bag‘ishlangan ma’ruzasida “Shuningdek, amaliyotga pedagog va
          mutaxassislarni jalb etgan holda, o‘quv reja va dasturlarini tubdan
          qayta ko‘rib chiqish zarur. Oldimizda yoshlarga tarbiya berish,
          psixologiya va boshqa turli sohalarda kadrlarni tayyorlash va qayta
          tayyorlash bo‘yicha murakkab vazifalar turibdi ” deb vazifa qo‘ydilar.
        </span>
        <span
          data-aos="fade-in-up"
          data-aos-delay="250"
          data-aos-duration="1000"
        >
          {" "}
          Yuqori samarali zamonaviy ta’lim va innovatsiya texnologiyalarini,
          ilg’or xorijiy amaliyotni keng joriy etgan holda, oliy ta’lim
          muassasalarining pedagog kadrlarini qayta tayyorlash va ularning
          malakasini oshirish bo’yicha malaka talablari, o’quv rejalari, dastur
          va uslublarini tubdan yangilash, oliy ta’lim muassasalari rahbar va
          pedagog kadrlarining faoliyatini zarur darajada tashkil etish va
          samaradorligini ta’minlash, global internet tarmog’i, multimedia
          tizimlari va masofadan o’qitish usullaridan foydalangan holda, ilg’or
          pedagogika, axborot-kommunikatsiya va innovatsiya texnologiyalarini
          egallash va ularni o’quv jarayoniga faol tatbiq etish.{" "}
        </span>
        <span
          data-aos="fade-in-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          Аvtоmоbillаrni turli хildаgi yo’l shаrоitlаri, iqlim vа hаvо
          shаrоitlаridа ishlаtilgаndа аvtоmоbillаrgа turli хildаgi kuchlаr,
          mоmеntlаr tа’sir qilаdi. Shulаr sаbаbli dvigаtеlning quvvаti (Ne),
          tirsаkli vаlning аylаnishlаri sоni (nN), burоvchi mоmеnti (Me),
          yonig’i sаrifi (gyo), аvtоmоbilning yurish Va tеzligi, tоrtish kuchi
          (PT), dinаmik оmili (Dа) vа аvtоmоbilning dinаmik pаspоrti o’zgаrib
          turаdi.
        </span>
      </div>
      <hr id="line" />
      <div className="staty">
        <p>
          {" "}
          Mirziyoev Sh.M.“Erkin va farovon, demokratik O’zbekiston davlatini
          mard va olijanob xalqimiz bilan birga quramiz” mavzusidagi O’zbekiston
          Respublikasi Prezidenti lavozimiga kirishish tantanali marosimiga
          bag’ishlangan Oliy Majlis palatalarining qo’shma majlisidagi nutqi. –
          T.: “O’zbekiston”. 2016. –14 b. O‘zbekiston Respublikasi Prezidenti
          Shavkat Mirziyoevning 2016–yil yakunlari va 2017– yilga mo‘ljallangan
          iqtisodiy dasturning eng muhim ustuvor yo‘nalishlariga bag‘ishlangan
          ma’ruzasi.
        </p>
      </div>
    </div>
  );
};

export default Asosiy;
