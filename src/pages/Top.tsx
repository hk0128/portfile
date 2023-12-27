import './Top.css'
import Header from '../component/Header'
import git from '../assets/github-mark-white.png'
import zenn from '../assets/logo-only.svg'
import selfie from '../assets/k0898_1.jpg'

function Home() {

return (
  <>
    <Header />
    <main>
      <div id="about">
        <h1>About me</h1>

        <div id="portfile-photo">
            <img src={selfie} />
        </div>

        <p>
        東京でエンジニアをしています。<br/>
        Reactの学習を兼ねて作成したポートフォリオサイトです。<br/>
        経歴やスキルについてまとめました。
        </p>

        <ul id="icons">
          <li>
          <a href="https://github.com/hk0128" target='_blank'>
              <img className="icon" src={git} />
          </a>
          </li>
          <li>
          <a href="https://zenn.dev/hk0128" target='_blank'>
              <img className="icon" src={zenn} />
          </a>
          </li>
        </ul>
      </div>
    </main>
  </>
)}
  
  export default Home
   