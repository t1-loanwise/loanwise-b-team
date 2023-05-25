import React from 'react'
import '../Pricing/Pricing.css'
import Question from '../../components/Question'
import Footer from '../../components/Footer/Footer.jsx'
import LoanwiseUsers from '../Home/LoanwiseUsers/LoanwiseUsers'



const Pricing = () => {
	return (
		<div className='pricing-container'>
				
                <div className='plan-div'>
							<h1>Choose your plan</h1>
								<p>Choose the pricing plan that works best for you, whether you're looking for casual transaction or flexible customizations</p>
									<a href='/'>Learn More in FAQ's</a>
				</div>
				
                <div className='card-wrapper'>
					<div className='card-div'>
							<div className='free-card'>
														<h2>Free</h2>
														<p>The basics for individuals and organisations</p>
															<div className='price-div'>
																<span  className='dollar'><sup>$ </sup></span>
																	<span className='zero'>0</span>
																<div className='time-div'>
																	<span>per year</span>
																	<span>forever</span>
																</div>
														</div>
													<button className='join-btn'>Join for free</button>
							</div>
							<div className='card-features'>
														<ul>
																<li> Access core features, including predictive analytics and customizable loan criteria.</li>
																<li>Real-time default alerts for prompt action by financial institutions.</li>
																<li>Historical loan performance analysis to help predict future defaults.</li>
																<li>Compliance with local and federal regulations for loan applications.</li>
																<li>Risk scoring prioritizes high-risk loans and minimizes default risk.</li>
																<li>Data integration with credit bureaus and financial institutions for borrower history.</li>
																<li>Affordable pricing for small financial institution.s</li>
														</ul>
							</div>
					</div>
						<div className='premium-card'>
										<div className='card-div premium-card-div'>
																<div className='free-card premium'>
																			<h2>Premium</h2>
																			<p>Advanced collaboration for
																									individuals and organisations</p>
																				<div className='premium-price-div'>
																					<span  className='premium-dollar  dollar'><sup>$ </sup></span>
																					<span className='premium-price-ash'>15  </span>
																						<span className='premium-dollar-black dollar'><sup>$ </sup></span>
																						<span className='premium-price-black'>30</span>
																					<div className='time-div  premium-time'>
																						<span>per year forever</span>
																						<span>for the first 12 months</span>
																					</div>
																			</div>
																		<button className='started-btn'>Get Started Premium</button>
																</div>
																<div className='card-features'>
																			<ul>
																					<li>Basic Plan benefits plus fraud detection and financial behavioral analysis.</li>
																					<li>Analyze borrower's social media for deeper financial insights.</li>
																					<li>Customizable dashboards for a comprehensive lending view and informed decisions.</li>
																					<li>Advanced reporting capabilities for valuable lending insights..</li>
																					<li>Dedicated support and training for optimal app usage.</li>
																					<li>Unlimited users for sealable lending as buisness grow</li>
																					<li>Competitive pricing with exceptional value for financial institution</li>
																			</ul>
																</div>
									</div>
						</div>
							<div className='card-div'>
							<div className='free-card premium'>
								<h2>Enterprise</h2>
									<p>Security, compliance and flexible deployment</p>
										<div className='premium-price-div'>
											<span  className='premium-dollar  dollar'><sup>$ </sup></span>
												<span className='premium-price-ash'>252    </span>
													<span className='premium-dollar-black dollar'><sup>$ </sup></span>
														<span className='premium-price-black'>231</span>
															<div className='time-div  premium-time'>
																<span>per year forever</span>
																	<span>for the first 12 months*</span>
															</div>
							</div>
								<div className='trial-btn-div'>
									<button className='free-btn'>Start a free trial</button>
											<button className='contact-btn'>Contact Sales</button>
														</div>
													</div>
													<div className='card-features'>
																<ul>
																		<li>Premium Plan benefit plus customized risk models and white-labeling. </li>
																		<li>Tailored risk models meet specific needs of financial institutions.</li>
																		<li>White-labeling enables branding of the app as their own. </li>
																		<li>Custom integrations with third-party systems provide seamless experience.</li>
																		<li> Advanced security features ensure safety of sensitive borrower data.</li>
																		<li>Flexible pricing options for tailored needs of financial institutions.</li>
																		<li>  Dedicated account management for personalized support.</li>
																</ul>
													</div>
							</div>
                </div>

                <div className="Useloanwise">
                        <LoanwiseUsers />
                </div>
        
			    <div className='question-wrapper'>
				        <Question />
                 </div>
                 <div className="footer">
                        <Footer />
                </div>

				
	
			
		</div>
	)
}

export default Pricing 