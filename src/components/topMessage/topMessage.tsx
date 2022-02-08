import './topMessage.css'
const TopMessage = () => {
    return(
        <div>
            <div className="TopMessage">
                <div className='TopMessage-question'>👋 <span>Want to contribute to reactjs/reactjs.org?</span></div>
                <div>If you have a bug or an idea, read the <span className='TopMessage-link'><a  data-testid='TopMessage-link1' href="https://github.com/reactjs/reactjs.org/blob/5f0549c86e7a9c0774e66687d1bc0118a681eb9d/CONTRIBUTING.md">contributing guideline</a> </span>before opening an issue.</div>
                <div>If you're ready to tackle some open issues, <span className='TopMessage-link'><a data-testid='TopMessage-link2' href="https://github.com/reactjs/reactjs.org/contribute">we've collected some good first issues for you.</a></span></div>
                <div className='TopMessage-dismiss'>Dismiss <i className="fas fa-caret-down"></i></div>
            </div>
            <div className='pinned-issues'>
                <div className='topic'>Pinned issues</div>
                <div className='issues'>
                    <div className='pinned-first'>
                        <div className='title'>New React Docs</div>
                        <div className='description'>#3308 opened on Oct 5, 2020 by rachelnabors</div>
                        <div className='status'>
                            <span><i className="status far fa-dot-circle"></i> Open</span>
                            <span><i className="status far fa-comment-alt"></i> 210</span>
                        </div>
                    </div>
                    <div className='pinned-second'>
                        <div className='title'>[Beta] Translation New React Docs</div>
                        <div className='description'>#4135 opened on Nov 29, 2021 by gaearon</div>
                        <div className='status'>
                            <span><i className="status far fa-dot-circle"></i> Open</span>
                            <span><i className="status far fa-comment-alt"></i> 24</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='filtered-issues'>
                        <div className='filter-search'>
                            <span className='filter'>Filters <i className="fas fa-caret-down"></i></span>
                            <span className='search'><i className="fas fa-search"></i>Search all issues</span>
                        </div>
                        <div className='label-milestone'>
                            <span className='label'>
                                <span><i className="fas fa-tag"></i> Labels</span>
                                <span className='number'>26</span>
                            </span>
                            <span className='milestone'>
                                <span><i className="fas fa-map-signs"></i> Milestones</span>
                                <span className='number'>0</span>
                            </span>
                            
                        </div>
                        <div className='new-issue'>
                            New issue
                        </div>
            </div>
            <div className='clear-filter'>
                <span><i className="fas fa-window-close"></i>Clear search query, filters, and sorts</span>
            </div>
        </div>
    )
}
export default TopMessage