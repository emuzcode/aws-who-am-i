import React, {useRef, useEffect} from 'react';
import Header from '../Header/Header';
import './Home.scss';
import earth from '../Assets/earth2.png'
//import another from '../Assets/anothersvg'
//import arrow from '../Assets/arrow.svg'
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';
import gsap from 'gsap';

function Home() {
  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let text4 = useRef(null);
  let h2 = useRef(null);
  let p1 = useRef(null);

  const timeline_home = gsap.timeline();
  useEffect(()=> {
    timeline_home.from([text1, text2, text3, text4], {
      duration: 1,
      skewY: 15,
      y: 400,
      stagger: {
        amount: .2
      }
    }, "-=1.2")
    timeline_home.from([h2, p1], {
      duration: .5,
      x: 200,
      skewX: 10,
      opacity: 0
    })
  })


  return (
    <div className="home">
      <Header timeline = {timeline_home} />
      <div className="container">
        <div className="container1">
          <div className="txt-line" id='taro'>
            <p ref={el => text1 = el }>Taro</p>
          </div>
          <div className="txt-line line-bottom" id="sakazume">
            <p ref={el => text2 = el }>Sakazume</p>
          </div>
        </div>
      </div>
      <div className="left-side-quote">
        <h2 ref={el => h2 = el }>
          Helping a precious time for someone who needs<br />
          Working anywhere I want. <br />
          FROM Hotel Concierge TO Entertainment × IT
        </h2>
        <p ref={el => p1 = el }>
          "誰かにとっての特別な時間を。" <br />
          "場所にとらわれたくない思い。"<br />
          元ホテルマン　→　エンターテイメント × IT へ
        </p>
      </div>

      <div className="container">
        <div></div>
        <div className="container1">
          <div className="txt-line" id="digital">
            <p ref={el => text3 = el }>Web</p>
          </div>
          <div className="txt-line line-bottom" id="designer">
            <p ref={el => text4 = el }>Developer</p>
          </div>
        </div>
      </div>
      <div className="earth-png">
        <img src={earth} alt="" />
      </div>

      <div className="short-about">
        <div className="main-h1-short-about">
          <h1 className="main-short-about">
            Strong
          </h1>
          <h1 className="main-short-about">
            Points
          </h1>
        </div>
        <div className="sub-main-p-short-about">
          <h2><b>1. &nbsp; 論理的かつ合理的に判断し円滑な業務を行うことができます</b></h2>
          <h3>
            　業務を遂行する際の一例を挙げると、まず目的から基準を求めるようにして、非合理的にならないように注意します。
          </h3>
          <h3>例えば、学生の頃によく友人と遊びでディベートをすることが好きで、いかに相手を論破するかを考えて過ごしていました。
          </h3>
          <h3>
            また前職の職場環境は、臨機応変な対応を意識しながら、常に優先順位を考えて行動する力を求められ実践してきました。
          </h3>
          <h2><b>2. &nbsp; 自走力のある人間です</b></h2>
          <h3>
            　興味を持った新しい知識や技術に関しては納得がいくまで追求します。
          </h3>
          <h3>また、取り入れた知識を定着させる為に、ポートフォリオを作成してインターネット環境にデプロイすることを挑戦し、</h3>
          <h3>ソースコードはGithubに公開してフィードバックを頂いたり、またTwitterでその日に得た学びを投稿するよう工夫をしています。</h3>
          <h2><b>3. &nbsp; 一人で作業に没頭することが好きですが、コミュニケーション能力も十分にあります</b></h2>
          <h3>
            　私はお客様対応が得意です。前職ではお客様の属性に合わせ、柔軟な対応を心がけ、
          </h3>
          <h3>たくさんのお客様アンケートから名指しでお褒めの言葉を頂くことができました。</h3>
          <h3>また英語力が必要な業務にも自信をもって取り組むこともできます。</h3>
          <h3>外国からのお客様へのご案内やビジネスメールのやり取りは積極的に行ってきました。</h3>
        </div>
        <div className="main-h1-short-about">
          <h1 className="main-short-about">
            Shortly
          </h1>
          <h1 className="main-short-about">
            About
          </h1>
          <h1 className="main-short-about">
            Myself
          </h1>
        </div>
        <div className="sub-main-p-short-about">
          <p>１９９５年１０月に埼玉県秩父市で生まれ</p>
          <p>神奈川県相模原市で育つ</p>
          <p>高校２年の夏にNew Zealandに留学</p>
          <p>アメリカのロサンゼルスにある短大を卒業</p>
          <p>一流の接客を極めたいと決めホテル業界へ</p>
          <p>あるきっかけを通じてエンジニアの道にシフト</p>
          <p>ギターと料理が趣味</p>
          <p>実は新宿南口で路上バンドもしていた</p>
        </div>
        <div className="another">
          {/* <img src={another} alt="" /> */}
        </div>
      </div>
      <div className="my-skills-main-reel">
        <div className="my-skills-reel" id="skill-reel">
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- Knowledge</div>
          <div className="reel-item">&nbsp; -- 学習内容</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- Knowledge</div>
          <div className="reel-item">&nbsp; -- 学習内容</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- Knowledge</div>
          <div className="reel-item">&nbsp; -- 学習内容</div>
          <div className="reel-item">&nbsp; -- My skills</div>
          <div className="reel-item">&nbsp; -- Knowledge</div>
          <div className="reel-item">&nbsp; -- 学習内容</div>
        </div>
        <div className="skill-set-boxes">
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">プログラミング言語</h1>
            <p className="skill-set-box-p">
              Java, Ruby, Javascript, React.js, Greensock - GSAP
            </p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">RDB</h1>
            <p className="skill-set-box-p">
              My SQL, PostgreSQL
            </p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">AWS</h1>
            <p className="skill-set-box-p">
              Cloud9, EC2, S3, IAM, VPC, CloudWatch, RDS, CodeCommit, CodeDeploy, CodePipeline, Certificate Manager, Route 53, CloudFront, CodeBuild, AWS Amplify 
            </p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">Saas/Paas</h1>
            <p className="skill-set-box-p">
              Github
            </p>
            <p>___</p>
          </div>
          <div className="skill-set-box">
            <h1 className="skill-set-box-h1">その他</h1>
            <p className="skill-set-box-p">
              Tera Term, VirtualBox, Wireshark, Appatch, Ngnix, unicorn, Capistrano, dhcp, unbound, bind, postfix, dovecot, vsftpd
            </p>
            <p>___</p>
          </div>
        </div>
        <div className="project-and-work">
          <h1>
            <Link className="h1-work" to="/works">
              My Projects and Works {/*<img src={arrow} alt="" />*/}
            </Link>
          </h1>
          <br />
          <p>Click above!</p>
        </div>

        <Footer />
      </div>
    </div>
  )
};

export default Home;