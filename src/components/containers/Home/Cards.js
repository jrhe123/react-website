import React, { Component } from 'react';


// styled-component
import { Card, CardTitle, CardCate, CardDesc, CardButton } from '../../../theme/types'


// style
import './Cards.css';



export default class Cards extends Component {

	constructor(){

		super();

		this.state = {

		}	
	}

 	render() {

    	return (

        <div>
          <div style={{marginTop: 48}}>
        		<div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/reactjs.png')} />
                <CardTitle>ReactJs</CardTitle>
                <CardCate>Front End</CardCate>
                <CardDesc>React (JavaScript library)</CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/redux.png')} />
                <CardTitle>Redux</CardTitle>
                <CardCate>Front End</CardCate>
                <CardDesc>From the very beginning, we need to stress that Redux has no relation to React.</CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/nodejs.png')} />
                <CardTitle>NodeJs</CardTitle>
                <CardCate>
                  Back End
                </CardCate>
                <CardDesc>
                  Node.js® is a JavaScript runtime built on Chrome V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O..
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
          	</div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/php.png')} />
                <CardTitle>PHP</CardTitle>
                <CardCate>
                  Back End
                </CardCate>
                <CardDesc>
                  PHP is a server-side scripting language designed primarily for web development but also used as a general-purpose programming languag                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/angular.svg')} />
                <CardTitle>PHP</CardTitle>
                <CardCate>
                  Front End
                </CardCate>
                <CardDesc>
                AngularJS is what HTML would have been, had it been designed for building web-apps.
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/codeigniter.svg')} />
                <CardTitle>PHP</CardTitle>
                <CardCate>
                  Back End
                </CardCate>
                <CardDesc>
                  CodeIgniter is an open-source software rapid development web framework
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
            </div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/apache2.png')} />
              
                <CardTitle>Apache2</CardTitle>
                <CardCate>
                  Server
                </CardCate>
                <CardDesc>
                  The Apache HTTP Server Project is an effort to develop and maintain an open-source HTTP server
                </CardDesc>
                <CardButton>View</CardButton>

              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/bootstrap.png')} />
             
                <CardTitle>Bootstrap</CardTitle>
                <CardCate>
                  Front End
                </CardCate>
                <CardDesc>
                  The most popular HTML, CSS, and JS library in the world.
                </CardDesc>
                <CardButton>View</CardButton>

              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/github.png')} />
                
                <CardTitle>Github</CardTitle>
                <CardCate>
                  Tools
                </CardCate>
                <CardDesc>
                  GitHub is a development platform inspired by the way you work
                </CardDesc>
                <CardButton>View</CardButton>

              </Card>
            </div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/webpack.jpg')} />
              
                <CardTitle>Webpack</CardTitle>
                <CardCate>
                  Front End
                </CardCate>
                <CardDesc>
                  webpack is a module bundler. It packs CommonJs/AMD modules i. e. for t
                </CardDesc>
                <CardButton>View</CardButton>

              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/goDaddy.png')} />
             
                <CardTitle>GoDaddy</CardTitle>
                <CardCate>
                  Service
                </CardCate>
                <CardDesc>
                  GoDaddy makes registering Domain Names fast, simple, and affordable. Find 
                </CardDesc>
                <CardButton>View</CardButton>

              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/git.png')} />
              
                <CardTitle>Git</CardTitle>
                <CardCate>
                  Tools
                </CardCate>
                <CardDesc>
                  Git (/ɡɪt/) is a version control system for tracking changes in computer files 
                </CardDesc>
                <CardButton>View</CardButton>

              </Card>
            </div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/html5.png')} />
                <CardTitle>HTML5</CardTitle>
                <CardCate>
                  Front End
                </CardCate>
                <CardDesc>
                  HTML5 is a markup language used for structuring and presenting content on the World Wid
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/css3.png')} />
                <CardTitle>CSS3</CardTitle>
                <CardCate>
                  Front End
                </CardCate>
                <CardDesc>
                  CSS3 is the latest evolution of the Cascading Style Sheets language and aims at e
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/facebook.png')} />
                <CardTitle>Facebook</CardTitle>
                <CardCate>
                  Service
                </CardCate>
                <CardDesc>
                  Facebook APIs
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
            </div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/firebase.png')} />
                <CardTitle>Firebase</CardTitle>
                <CardCate>
                  Service
                </CardCate>
                <CardDesc>
                  Firebase APIs
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/gearman.png')} />
                <CardTitle>Gearman</CardTitle>
                <CardCate>
                  Back End
                </CardCate>
                <CardDesc>
                  Cron Task Server
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/heroku.png')} />
                <CardTitle>Heroku</CardTitle>
                <CardCate>
                  Service
                </CardCate>
                <CardDesc>
                  Heroku is a platform as a service (PaaS) that enables developers to build, run, and operat
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
            </div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/grunt.png')} />
                <CardTitle>Grunt</CardTitle>
                <CardCate>
                  Front End
                </CardCate>
                <CardDesc>
                  Tools
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/gulp.png')} />
                <CardTitle>Gulp</CardTitle>
                <CardCate>
                  Front End
                </CardCate>
                <CardDesc>
                  Tools
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/google.png')} />
                <CardTitle>Google Analytics</CardTitle>
                <CardCate>
                  Service
                </CardCate>
                <CardDesc>
                  Google APIs
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
            </div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/ionic.png')} />
                <CardTitle>Ionic</CardTitle>
                <CardCate>
                  Front End
                </CardCate>
                <CardDesc>
                  Angular Native
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/java.png')} />
                <CardTitle>Java</CardTitle>
                <CardCate>
                  Back End
                </CardCate>
                <CardDesc>
                  Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented, and specifical
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/jenkins.png')} />
                <CardTitle>Jenkins</CardTitle>
                <CardCate>
                  Service
                </CardCate>
                <CardDesc>
                  TDD: Test-driven development
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
            </div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/linux.png')} />
                <CardTitle>Linux</CardTitle>
                <CardCate>
                  OS
                </CardCate>
                <CardDesc>
                  Linux CLI
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/mailchimp.jpg')} />
                <CardTitle>MailChimp</CardTitle>
                <CardCate>
                  Service
                </CardCate>
                <CardDesc>
                  Customized Email Service APIs
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/mongodb.png')} />
                <CardTitle>MongoDB</CardTitle>
                <CardCate>
                  Back End
                </CardCate>
                <CardDesc>
                  Non-Relational Database
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
            </div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/ubuntu.png')} />
                <CardTitle>Ubuntu</CardTitle>
                <CardCate>
                  OS
                </CardCate>
                <CardDesc>
                  Server operating system
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/visualStudio.png')} />
                <CardTitle>Visual Studio</CardTitle>
                <CardCate>
                  Tools
                </CardCate>
                <CardDesc>
                  IDE for C# programming
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/woocommerce.png')} />
                <CardTitle>WooCommerce</CardTitle>
                <CardCate>
                  Service
                </CardCate>
                <CardDesc>
                  API export data
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
            </div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/jquery.gif')} />
                <CardTitle>Jquery</CardTitle>
                <CardCate>
                  Front End
                </CardCate>
                <CardDesc>
                  javascript
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/laravel.png')} />
                <CardTitle>Laravel</CardTitle>
                <CardCate>
                  Back End
                </CardCate>
                <CardDesc>
                  framework
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/thinkphp.jpg')} />
                <CardTitle>Think PHP</CardTitle>
                <CardCate>
                  Back End
                </CardCate>
                <CardDesc>
                  framework
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
            </div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/mapbox.png')} />
                <CardTitle>Map BOX</CardTitle>
                <CardCate>
                  service
                </CardCate>
                <CardDesc>
                  Customized Google Map APIs
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/mysql.png')} />
                <CardTitle>MySQL</CardTitle>
                <CardCate>
                  Back End
                </CardCate>
                <CardDesc>
                  Relational database
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/oracel.jpg')} />
                <CardTitle>Oracel DB</CardTitle>
                <CardCate>
                  Back End
                </CardCate>
                <CardDesc>
                  Database
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
            </div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/phaxio.png')} />
                <CardTitle>Phaxio</CardTitle>
                <CardCate>
                  service
                </CardCate>
                <CardDesc>
                  Fax servier / API
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/twilio.png')} />
                <CardTitle>Twilio</CardTitle>
                <CardCate>
                  service
                </CardCate>
                <CardDesc>
                  SMS service / API
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/plivo.png')} />
                <CardTitle>Plivo</CardTitle>
                <CardCate>
                  service
                </CardCate>
                <CardDesc>
                  SMS service / API
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
            </div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/cordova.png')} />
                <CardTitle>Cordova</CardTitle>
                <CardCate>
                  Front End
                </CardCate>
                <CardDesc>
                  Native app
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/postman.png')} />
                <CardTitle>Postman</CardTitle>
                <CardCate>
                  Tools
                </CardCate>
                <CardDesc>
                  API tester
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/sass.svg')} />
                <CardTitle>SASS</CardTitle>
                <CardCate>
                  Front End
                </CardCate>
                <CardDesc>
                  Tools
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
            </div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/restful.png')} />
                <CardTitle>Restful APIs</CardTitle>
                <CardCate>
                  Back End
                </CardCate>
                <CardDesc>
                  Create the restful API framework
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/alibaba.png')} />
                <CardTitle>Alibaba</CardTitle>
                <CardCate>
                  Service
                </CardCate>
                <CardDesc>
                  APIs
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/wordpress.png')} />
                <CardTitle>WordPress</CardTitle>
                <CardCate>
                  Front End
                </CardCate>
                <CardDesc>
                  php / theme / web-site
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
            </div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/slack.png')} />
                <CardTitle>Slack</CardTitle>
                <CardCate>
                  Service
                </CardCate>
                <CardDesc>
                  APIs
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/socket.png')} />
                <CardTitle>Socket.io</CardTitle>
                <CardCate>
                  Back End
                </CardCate>
                <CardDesc>
                  Notification Service
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/stripe.png')} />
                <CardTitle>Stripe</CardTitle>
                <CardCate>
                  Service
                </CardCate>
                <CardDesc>
                  Online Credit Card Charge APIs
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
            </div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/svn.png')} />
                <CardTitle>SVN</CardTitle>
                <CardCate>
                  Tools
                </CardCate>
                <CardDesc>
                  Tools
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/tomcat.jpg')} />
                <CardTitle>Tomcat</CardTitle>
                <CardCate>
                  Back End
                </CardCate>
                <CardDesc>
                  java server configuration
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/telegram.png')} />
                <CardTitle>Telegram</CardTitle>
                <CardCate>
                  Service
                </CardCate>
                <CardDesc>
                  Bot API service
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
            </div>
          </div>
          <div style={{marginTop: 24}}>
            <div style={style.flexBox}>
              <Card>
                <img className="item-logo" src={require('../../../assets/phpMailer.png')} />
                <CardTitle>PHP Mailer</CardTitle>
                <CardCate>
                  Back End
                </CardCate>
                <CardDesc>
                  STMP email sending
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
              <Card>
                <img className="item-logo" src={require('../../../assets/sourceTree.png')} />
                <CardTitle>SourceTree</CardTitle>
                <CardCate>
                  Tools
                </CardCate>
                <CardDesc>
                  Git Management
                </CardDesc>
                <CardButton>View</CardButton>
              </Card>
            </div>
          </div>

          <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    	)
  }

}

const style = {

  flexBox: {
    display: "flex",
    justifyContent: "space-around"
  }
}
