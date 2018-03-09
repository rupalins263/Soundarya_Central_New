import React,{Component} from 'react';
import '../Nav/Nav.css';
import '../Contact/Contact.css';

export default class HighSchool extends Component{
    render(){
        return(
           
    <div className="content container">
    <div className="page-wrapper">
        <header className="page-heading clearfix">
            <h1 className="heading-title pull-left">High School</h1>
            <div className="breadcrumbs pull-right">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-label">You are here:</li>
                    <li><a href="/">Home</a><i className="fa fa-angle-right"></i></li>
                    <li className="current">HIgh School</li>
                </ul>
            </div>
        </header> 
        <div className="page-content">
            <div className="row page-row">
                <article className="welcome col-md-8 col-sm-7">                         
                    
	                 
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#myCarousel" data-slide-to="0" className=""></li>
                <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                
                </ol><div className="carousel-inner">
                            <div className="item  active"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359498/9L2A7802_-_Copy_oclvnu.jpg" alt=""/></div>
                            <div className="item "><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359498/9L2A7846_e3tizt.jpg" alt=""/></div>
                
                            <div className="item"><img src="http://res.cloudinary.com/dvl9i5pry/image/upload/v1511359498/9L2A7873_k4ujby.jpg" alt=""/></div>
                
                    </div>
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span></a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span></a>
                            </div>           
                    
                    <h3 className="title" style={{"margin-top": "30px"}}>Curriculum (XI - X)</h3>                   
                   <blockquote className="custom-quote">
                        <p>Children need to become self- reliant and independent learners as they go into middle school. The process of transition begins from Class V onwards. Teachers use methods like peer group learning, co-operative learning, project methods and other different media like theatre and newspapers to facilitate learning. Rote learning is not encouraged. Children are instead trained in various study skills by the respective subject teachers and this helps them learn and understand better. From Class VII onwards, children are slowly trained to handle larger portions to make their transition to high school easier.</p>

						<p>In Middle school the curriculum of all the academic subjects as well as a variety of co-curricular activities encourages creativity, aesthetics and adventure. All students study English, Kannada,Hindi, Mathematics, Science (Physics, Chemistry and Biology), Social Studies (History, Civics and Geography) and Co-curricular activities include Socially Useful & Productive Work (Art, Music, Dance, , Science Club, Social Club, Literary Club), Physical and Health Education and Computer Education.</p>
					</blockquote>
                   <h3 className="title" style={{"margin-top": "30px"}}>Assessment &amp; Evaluation</h3>
                    <p><img className="img-responsive" src="http://zenopsys.net/soundarya_forms/central/images/Grade9_10part1.jpg" alt=""/>
                       <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/central/images/Grade9_10part2.jpg" alt=""/>
                       <img className="img-responsive" src="http://zenopsys.net/soundarya_forms/central/images/Grade9_10part3.jpg" alt=""/>

                    </p>
                   
                    
                    
                    
                </article>
                <aside className="page-sidebar  col-md-3 col-md-offset-1 col-sm-4 col-sm-offset-1">                    
                    <section className="widget has-divider">
                        <h3 className="title">Related Links</h3>
                        <ul className="job-list custom-list-style">
                           <li><i className="fa fa-caret-right"></i><a href="/#/About">About Us</a></li>
                                <li><i className="fa fa-caret-right"></i><a href="/#/About#mission">Mission</a></li>
                                <li><i className="fa fa-caret-right"></i><a href="/#/About#vision">Vision</a></li>
                       </ul>
                    </section>

                    <section className="widget">
                        <h3 className="title">Contact</h3>
                        <p><b>Soundarya Central School</b><br/>Soundaryanagar, Sidedahalli,<br/> Nagasandra Post, Bangalore-560073</p>
                        <p className="tel"><i className="fa fa-phone"></i> 080-28391115 / +91 9740420115</p>
                        <p className="email"><i className="fa fa-envelope"></i> <a href="#">soundaryacentralschool@gmail.com</a></p>
                    </section> 
                </aside>
            </div>
        </div>
    </div>
</div>
            )
                           
                           
         }
    }