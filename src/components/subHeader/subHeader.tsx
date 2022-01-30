import './subHeader.css'
import request from '../../../src/images/pull-request.png'
import fork from '../../../src/images/fork.png'

const SubHeader = (prop) => {

    return (
        <div className='SubHeader'>
            <div className='SubHeader-top'>
                <div className='left'>
                    <span><i className="subheader fas fa-clipboard"></i> </span>
                    <span className='owner'><a href="https://github.com/reactjs">reactjs</a> </span>/
                    <span className='repo-name'> <a href="https://github.com/reactjs/reactjs.org">reactjs.org</a></span>
                    <span className='repo-visibility'> Public</span>
                </div>
                <div className='right'>
                    <div className='watch'>
                        <span><i className="far fa-eye"></i></span>
                        <span>Watch</span>
                        <span className='number'>181</span>
                        <span><i className="fas fa-caret-down"></i></span>
                    </div>
                    <div className='fork'>
                        <span><img className='fork-icon' src={fork} alt="github fork icon" /></span>
                        <span>Fork</span>
                        <span className='number'>5.7k</span>
                    </div>
                    <div className='star'>
                        <span><i className="far fa-star"></i></span>
                        <span>Star</span>
                        <span className='number'>6.8k</span>
                        <span><i className="fas fa-caret-down"></i></span>
                    </div>
                </div>
            </div>
            <div className='SubHeader-bottom'>
                <div className='code'>
                    <span><i className="subheader fas fa-code"></i> Code </span>
                </div>
                <div className='issues'>
                    <span><i className={!prop.count.isClosed? 'subheader far fa-dot-circle' : 'far fa-check-circle'}></i> Issues <span className='number'>{prop.count.totalCount}</span></span>
                </div>
                <div className='pull-request'>
                    <span><img className='subheader pull-request-icon' src={request} alt='pull request icon'></img> Pull requests <span className='number'>584</span></span>
                </div>
                <div className='actions'>
                    <span><i className="subheader far fa-play-circle"></i> Actions</span>
                </div>
                <div className='security'>
                    <span><i className="subheader fas fa-shield-alt"></i> Security</span>
                </div>
                <div className='insight'>
                    <span><i className="subheader fas fa-chart-line"></i> Insights</span>
                </div>
            </div>
        </div>
    )

}
export default SubHeader
