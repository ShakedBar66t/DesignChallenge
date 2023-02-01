import { AppHeader } from "../cmps/app-header";

export function HomePage() {
    return (
        <section className="home-page">
            <AppHeader />
            <section className="home-page-index main-layout">
                <div className="intro">
                    <h1>Find the best <span>talent</span></h1>
                    <p>Finding the right people and building high performing teams can be hard. Most companies aren't tapiing into the abundance of global talent. We're about to change that.</p>

                </div>

                <div className="info full">
                    <div className="info-index main-layout">
                        <div style={{ display: 'flex', justifyContent: "space-between", paddingTop: '140px' }}>
                            <div style={{ width: '445px', height: '202px' }}>
                                <h1>Build & manage distributed teams like no one else.</h1>
                            </div>
                            <div className="achievement-list" style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className="achievement1">
                                    <img src="" alt="" />
                                    <h2>Experienced Individuals</h2>
                                    <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                                </div>
                                <div className="achievement2">
                                    <img src="" alt="" />
                                    <h2>Easy to implement</h2>
                                    <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                                </div>
                                <div className="achievement3">
                                    <img src="" alt="" />
                                    <h2>Enhanced Productivity</h2>
                                    <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="reviews full">
                    <div className="review-examples main-layout">
                        <h1>Delivering real results for top companies. Some of our <span>success stories.</span></h1>
                        <div className="reviews-list" style={{display: 'flex', textAlign: 'center', padding: '0'}}>
                            <div className="reivew1">
                                <p>“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                                <h2>Kady Baker</h2>
                                <img src="" alt="" />
                            </div>
                            <div className="reivew2">
                                <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                                <h2>Aiysha Reese</h2>
                                <img src="" alt="" />
                            </div>
                            <div className="reivew3">
                                <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                                <h2>Arthur Clarke</h2>
                                <img src="" alt="" />
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </section>
    )
}