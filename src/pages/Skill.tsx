import './Skill.css'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Java', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS3', 'Ruby', 'Python', 'Git', 'Docker'],
  datasets: [
    {
      label: '# of Votes',
      data: [15, 7, 5, 5, 5, 1, 1, 4, 4],
      backgroundColor: [
        'rgba(0, 99, 164, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(232, 66, 0, 0.5)',
        'rgba(86, 255, 235, 0.5)',
        'rgba(255, 0, 0, 0.5)',
        'rgba(255, 230, 0, 0.5)',
        'rgba(255, 98, 0, 0.5)',
        'rgba(29,99,237,0.3)',
      ],
      borderColor: [
        'rgba(0, 99, 164, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(255, 206, 86, 0.4)',
        'rgba(232, 66, 0, 0.4)',
        'rgba(86, 255, 235, 0.4)',
        'rgba(255, 0, 0, 0.4)',
        'rgba(255, 230, 0, 0.4)',
        'rgba(255, 98, 0, 0.4)',
        'rgba(29,99,237, 0.4)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
};

function Skill() {
  return (
    <>
        <Header />
        <main>
          <div id="skill">
            <div id="chart">
              <Pie data={data} options={options} width={500} height={500} />
            </div>
            <div id="comment">
              <p>
                業務ではサーバーサイドの技術を中心に経験しています。<br/>
                <br/>
                JavaのフレームワークはSpringBootの使用経験が最も多く、<br/>
                一部の案件でJava EEを利用したことがあります。<br/>
                また、直近の案件ではRuby、Pythonを使用したAPI開発にも<br/>
                携わりました。<br/>
                <br/>
                フロントの経験について、業務ではJQueryを利用した<br/>
                開発を経験してきました。<br/>
                自己学習の際にフロントをVueやReactで作成することで<br/>
                モダンなフロントの技術についても学習を進めています。
              </p>
            </div>
          </div>
        </main>
        <Footer />
    </>
  )
}

export default Skill
