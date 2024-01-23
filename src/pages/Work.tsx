import './Work.css'
import Header from '../component/Header'
import Label from '../component/Label'

function Work() {
    return (
    <>
        <Header />
        <main>
          <div id="work">
            <div className='content'>
                <p>
                    <span>2023-5 ~ 2023-12</span><br/>
                    物流支援サービスの開発業務<br/>
                    <Label name='Java' />
                    <Label name='PostgreSQL' />
                    <Label name='python' />
                </p>
            </div>

            <div className='line'></div>

            <div className='content'>
                <p>
                    <span>2022-11 ~ 2023-4</span><br/>
                    ゲノム情報アプリの開発業務<br/>
                    <Label name='ruby' />
                    <Label name='PostgreSQL' />
                </p>
            </div>

            <div className='line'></div>

            <div className='content'>
                <p>
                    <span>2019-12 ~ 2022-10</span><br/>
                    社内向け業務システムの開発業務<br/>
                    <Label name='Java' />
                    <Label name='PostgreSQL' />
                    <Label name='JavaScript' />
                    <Label name='HTML5' />
                    <Label name='CSS3' />
                </p>
            </div>
          </div>
        </main>
    </>
    )
  }
  
  export default Work
