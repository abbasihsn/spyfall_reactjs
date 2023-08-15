import React, { useState } from "react";
import "./SpyfallGame.css";
import Footer from "./Footer";

const l1 = [
    "سیلی",
    "شکلات",
    "قلقلک",
    "کارت ملی",
    "پروفایل",
    "عسل",
    "آرد",
    "یخچال",
    "کلمه",
    "بیوی تلگرام",
    "کوله پشتی",
    "کیف پول",
    "پیاز",
    "جوراب",
    "دستکش",
    "اسب",
    "شیشه مربا",
    "نمکدان",
    "تله موش",
    "ملاقه",
    "گلدان",
    "آفتابه",
    "یخچال ساید بای ساید",
    "جهیزیه",
    "مبل استیل",
    "لوله بخاری",
    "قندان",
    "پوشک بچه",
    "دست کلید",
    "ترس",
    "جذاب",
    "حسرت",
    "تقلب",
    "کلاه برداری",
    "داستان",
    "بزرگ",
    "دروغ",
    "خجالت",
    "تعریف",
    "چشم",
    "صحت",
    "جنس",
    "مخالف",
    "بچه گانه",
    "احمق",
    "اعتیاد",
    "وابستگی",
    "مسیح علی نژاد",
    "محمود احمدی نژاد",
    "تلوزیون",
    "دادگاه تجدید نظر",
    "مدیر منابع انسانی",
    "دادستان عمومی",
    "تشریفات",
    "ناتالی پرتمن",
    "صبر ایوب",
    "مخبر الدوله سر سعدی",
    "مدار صفر درجه",
    "کروموزوم",
    "جزیره متروکه",
    "استکبار جهانی",
    "درخت اکالیپتوسفراماسونری",
    "استکبار ستیزی",
    "بیمه عمر",
    "آتش به اختیار",
    "رادیولوژی",
    "نخل خرما",
    "روح خورزو خان",
    "گستاخ",
    "لاتاری",
    "زن دوم شاپور اول",
    "۲۲ بهمن",
    "ترسناک",
    "شکست عشقی",
    "راز",
    "نفرت",
    "زندگی",
    "وجدان بیدار",
    "ملیله دوزی"
  ]

  const l2 = [
    "جدول مندلیوف",
    "مانتو گیپور مجلسی",
    "پانکراس",
    "گیفت عروسی",
    "یاتاقان",
    "پوریا ولی",
    "ارولوژیست",
    "پروتکل الحاقی",
    "مانیکور",
    "وادی عرفان",
    "سمبل مقاومت",
    "تفتیش عقاید",
    "کاتولیک",
    "انبر نسارا",
    "سیاست خارجی",
    "مقررات نظامی",
    "بواسیر",
    "در حال توسعه",
    "جادوگر شهر",
    "حمله سایبری",
    "بادیه نشین",
    "پلیس فتا",
    "نشیمنگاه",
    "شیر هموژنیزه",
    "غروب جمعه",
    "کلیسای واتیکان",
    "سوپاپ اطمینان",
    "کرومزوم",
    "فیبرنوری",
    "وال استریت",
    "خویشتن داری",
    "اصحاب کهف",
    "سمج",
    "فدریکا موگرینی",
    "استیضاح ترامپ",
    "طالبان",
    "ابوبکر بغدادی",
    "انرژی هسته‌ای حق مسلم ماست",
    "مرگ بر آمریکا",
    "تحقیر",
    "یک هفته",
    "پول",
    "دوست",
    "شوخی",
    "نامرئی",
    "جزیره",
    "لحظات",
    "عاشقانه",
    "وانمود",
    "غول چراغ جادو",
    "آینه",
    "همسر",
    "زندان",
    "سن",
    "گریه",
    "گوگل",
    "دست",
    "پا",
    "ران پا",
    "آرنج",
    "مچ دست",
    "ناخن",
    "النگو",
    "لاک",
    "کیبورد",
    "مانیتور",
    "زانو",
    "خاطره",
    "کودکی",
    "دوستت دارم",
    "گونه",
    "ماساژ",
    "کره",
    "فریاد",
    "دراز نشست",
    "آهنگ",
    "دوش",
    "پیشانی",
    "یخ",
    "شلوار",
    "پلک",
    "چاشنی",
    "زیر بغل",
    "برقص"]
 const l3 = ["آقای مجری", "بابا پنجعلی", "شوگر مامی", "آنجلینا جولی", "آرایش", "موسیقی", "پیام", "لیست تماس", "ویروس کرونا", "تحریم‌های نفتی", "معجون", "سطل زباله", "ساندویچ", "خیابان", "پشت بام", "فریاد", "بچه سر راهی", "همسایه بغلی", "هلیکوپتر", "سراسیمه", "تمساح", "رستوران", "پماد بواسیر", "ربات", "آبی", "مسواک", "ترشی", "استخر", "دستشویی", "آقا", "خانم", "عادت", "دست توی دماغ", "جذاب", "بابا اتی", "مهران مدیری", "کلاه قرمزی و پسر خاله", "جوکر", "جن گیر", "حبیب سریال فوق لیسانسه ها", "شب های برره", "رختخوابت", "حمام", "دوست صمیمی", "قطع رابطه", "دوست‌پسر", "دوست‌دختر", "جواب منفی", "ازدواج", "برادر", "خواهر", "بازیگر", "سینما", "تئاتر", "لخت", "لباس زیر", "نمره‌", "سفر رمانتیک", "دختر عموی پدر", "نوید محمد زاده", "جشنواره فیلم فجر", "همسفر", "عاشق شدن", "موی بلند", "کچل", "خوابیدن روی شکم", "پارتنر", "خیانت", "رابطه", "عشق در نگاه اول"]
 const l4 = ["متنفر",
 "مواد مخدر",
 "پیشنهاد دوستی",
 "برادر شوهر",
 "شوهر",
 "دوچرخه",
 "ماشین",
 "کامیون",
 "طلا",
 "پتو",
 "صبحانه",
 "ناهار",
 "شام",
 "سیگار",
 "تحت تاثیر",
 "حبس",
 "اینستاگرام",
 "استوری",
 "رویا",
 "هیجان‌انگیز",
 "دانشگاه",
 "شغل",
 "سلبریتی",
 "ویژگی مثبت",
 "ویژگی منفی",
 "معلم",
 "قدبلند",
 "اعضای بدن",
 "افتخار",
 "کراش",
 "خلاف",
 "خودکشی",
 "مثبت ۱۸",
 "باد معده",
 "اجتناب",
 "مخاطب خاص",
 "نمکدان",
 "تله موش",
 "ملاقه",
 "گلدان",
 "آفتابه",
 "یخچال ساید بای ساید",
 "تجربه‌",
 "پرحرارت",
 "مدرسه",
 "خرید",
 "پاساژ",
 "مانتو",
 "ساپورت",
 "کش مو",
 "تایپ",
 "واتساپ",
 "کتاب درسی",
 "مشق نوشتن",
 "سفر طولانی",
 "شمال",
 "جنوب",
 "تهران",
 "ابراهیم تاتلیس",
 "چند همسری",
 "پدر",
 "مادر",
 "دفتر خاطرات",
 "بوی دهان",
 "دزدی",
 "استفراغ",
 "تف",
 "آدم پولدار",
 "دوست صمیمی",
 "غریبه",
 "مهمون",
 "عروسک",
 "همسفر",
 "تغییر",
 "جنسیت",
 "لباس دخترانه",
 "زنگ همسایه",
 "دوغ",
 "کلاغ",
 "سگ",
 "طوطی",
 "قناری",
 "نوزاد",
 "پسربچه",
 "دختربچه",
 "هیستوری لب تاپ",
 "موش",
 "اسب"]

 const l5 = [
    "شیشه مربا",
    "جهیزیه",
    "مبل استیل",
    "لوله بخاری",
    "قندان",
    "پوشک بچه",
    "دست کلید",
    "دانشگاه",
    "کافه",
    "کلانتری",
    "مدرسه",
    "بیمارستان",
    "ساحل",
    "سیرک",
    "بانک",
    "شرکت",
    "تئاتر",
    "موزه",
    "مسجد",
    "استخر",
    "آرایشگاه",
    "کاخ",
    "جنگل",
    "رستوران",
    "پاساژ",
    "پارک",
    "سینما",
    "کنسرت",
    "زمین فوتبال",
    "فرودگاه",
    "میدان جنگ",
    "سفارت",
    "قطار",
    "کلیسا",
    "هتل",
    "آمبولانس",
    "حمام عمومی",
    "دستشویی پارک",
    "استودیو",
    "هواپیما",
    "شهربازی",
    "آشپزخانه",
    "دفترکار",
    "حیاط",
    "باغ",
    "بیابان",
    "باشگاه بدنسازی",
    "نجاری",
    "آهنگری",
    "عطاری",
    "قبرستان",
    "قصابی",
    "بازار",
    "کاباره",
    "گلفروشی",
    "طلا فروشی"
  ]
 const LOCATIONS = l1.concat(l2, l3, l4, l5)  

 const SpyfallGame = () => {
    
    const [numberOfUsers, setNumberOfUsers] = useState(0)
    const [numberOfSpies, setNumberOfSpies] = useState(0)
    const [gameStarted, setGameStarted] = useState(false)
    const [selectedLocation, setSelectedLocation] = useState()
    const [playersRole, setPlayersRole] = useState([])
    const [currentIdx, setCurrentIdx] = useState(0)
    const [showRole, setShowRole] = useState(false);
    const handleUserNumberChange = (event)=>{
      console.log(`user number: ${event.target.value}`)
      setNumberOfUsers(event.target.value)
    }

    const handleSpyNumberChange = (event)=>{
      console.log(`spy number: ${event.target.value}`)
      setNumberOfSpies(event.target.value)
    }

    const startGame = ()=>{
      console.log(`start game: user number: ${numberOfUsers} - spies: ${numberOfSpies}`)

      if(numberOfSpies>0 & numberOfUsers>0){
        const locationIndex = Math.floor(Math.random() * LOCATIONS.length);
        setSelectedLocation(LOCATIONS[locationIndex])

        // create new role list
        const playerIsSpy = [];
        for (let i = 0; i < numberOfUsers; i++) {
          playerIsSpy.push(false);
        }

        // set spies
        for (let i = 0; i < numberOfSpies; i++) {
          let randomIndex;
          do {
            randomIndex = Math.floor(Math.random() * numberOfUsers);
          } while (playerIsSpy[randomIndex]);
          playerIsSpy[randomIndex] = true;
        }

        console.log(`players role: ${playerIsSpy}`)
        setPlayersRole(playerIsSpy)
        setCurrentIdx(0)
        setGameStarted(true)

      }
    }

    const showCurrentRole = ()=>{
      setShowRole(true);
    }

    const nextPlayer = ()=>{
      setShowRole(false);

      if(currentIdx<(numberOfUsers-1)){
        setCurrentIdx(prevState=>prevState+1)
      } else{
        setGameStarted(false)
      }
      

    }


    return (
      <div className="spyfall-game-container">
        {gameStarted && (
          <div className="gameplay-container">
            {!showRole && (
              <div>                
                <h3 className="player-turn">Player {currentIdx + 1}'s turn</h3>
                <button className="next-button" onClick={showCurrentRole}>Show My Role</button>
              </div>
            )}
            {showRole && (
              <div>
                <h1 className="title">{playersRole[currentIdx] ? "SPY 🤐" : `${selectedLocation}`}</h1>
                <button className="next-button" onClick={nextPlayer}>Next Player</button>
              </div>
            )}
          </div>
        )}
        {!gameStarted &&  <div className="setup-container">
            <h1 className="title">Spyfall Game</h1>
            <div className="setup-form">
              <label>
                Number of players:
                <input type="number" value={numberOfUsers} onChange={handleUserNumberChange} />
              </label>
              <label>
                Number of spies:
                <input type="number" value={numberOfSpies} onChange={handleSpyNumberChange} />
              </label>
            </div>
            <button className="start-button" onClick={startGame}>Start Game</button>
          </div>}
        <Footer />
        </div>)
 }
  

export default SpyfallGame;