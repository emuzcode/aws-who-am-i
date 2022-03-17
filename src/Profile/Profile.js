import React, {useRef, useEffect} from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Profile.scss'
import gsap from 'gsap';
//import flower from '../Assets/flower.svg'


function Profile() {

  let text1 = useRef(null);
  let text2 = useRef(null);
  let image = useRef(null);
  let p1 = useRef(null);
  const timeline_profile = gsap.timeline();
  useEffect(()=> {
    timeline_profile.from([text1, text2], {
      duration: .8,
      y: 500,
      skewY: 10,
      stagger: {
        amount: .4
      }
    }, "-=.5")
    timeline_profile.from(image, {
      duration: 1.5,
      y: 300,
      delay: .2,
      opacity: 0
    }, "-=.5")
    timeline_profile.from(p1, {
      duration: .5,
      x: 200,
      skewX: 10,
      opacity: 0
    })
  })


  return (
    <>
    
    <div>
      <div className="profile">
        <Header timeline = {timeline_profile} />
        <div className="profile-container">
          <div className="container-text">
            <div className="container-inner-text1">
              <p ref={el => text1 = el}>
                Taro
              </p>
            </div>
            <div className="container-inner-text2">
              <p ref={el => text2 = el}>
                Sakazume
              </p>
            </div>
          </div>

          <div ref={el => p1 = el} className="container-quote container-quote1">
            <p>
              Offering Hospitality <br /> 
              English Language Capability <br /> 
              Service Industry, Business Etiquette 
            </p>
          </div>
          <div className="container-image" ref={el => image = el}></div>
        </div>

        <div className="profile-container2">
          <div className="profile-container2-heading">
            <div className="profile-text-lower">
              <p>Career</p>
            </div>
          </div>
          <div className="profile-container2-p">
            <h2><b>2011.4 &nbsp;&nbsp;&nbsp; 県立 大和西高等学校　入学</b></h2>
            <p>
              高校2年の夏に New Zealand Napier にある<br /> 
              Tamatea High School に1年留学し異国の文化に触れた。
            </p>
            <h2><b>2015.9 &nbsp;&nbsp;&nbsp; カリフォルニア州　シトラスカレッジ　入学</b> </h2>
            <p>
              様々な文化や価値観を持つ友人と過ごし <br /> 
              グローバルな視点や経営管理学を学んだ。
            </p>
            <h2><b>2019.8 &nbsp;&nbsp;&nbsp; 株式会社 京王プレッソイン　入社</b></h2>
            <p>
              英語力、ホスピタリティ精神、培った接客力を活かして <br /> 
              コンシェルジュ業務に尽力した。 <br />
              チェーン全体のスタッフ対象の英語研修を担当した経験あり。
            </p>
            <h2><b>2021.11 &nbsp;&nbsp;&nbsp; 埼玉職業能力開発促進センター　ICTエンジニア科　入所</b> </h2>
            <p>
              テクノロジーで社会貢献をしたいと考え、プログラミングを勉強を始める。 <br /> 
              情報通信技術を活用したシステム設計、開発、構築、保全に対応予定。
            </p>
          </div>
          <div className="profile-container2-heading2">
            <div className="profile-text-lower">
              <p>Core</p>
            </div>
          </div>
          <div className="profile-container2-p">
          <h2><b>「誰かにとっての特別な時間を。」</b></h2>
            <p>
              家族や友達の誕生日、冠婚葬祭、大好きな歌手のイベント<br /> 
              誰かのプライベート・非日常体験に携われることが<br /> 
              自分にとって「喜び」「やりがい」「生きがい」でした
            </p>
            <h2><b>「場所にとらわれたくない思い。」</b> </h2>
            <p>
              ホテルマンの頃に感じたことは、 <br /> 
              「なぜ自分は建物内もしくは周りでしか人を助けられないのか」
            </p>
          </div>
        </div>
        <div className="profile-footer">
          <Footer />
        </div>
      </div>
    </div>

    </>
  )
}

export default Profile