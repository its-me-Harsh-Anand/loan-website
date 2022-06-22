import Navbar from './Navbar'
import Home from "./Home"
import Footer from "./Footer"
import './style.css'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import About from './About/About'
import Faq from './Faq/Faq'
import Login from './Login/Login'
import Calculator from './EmiCalculator/Calculator'
import Popup from './Popup'
import ContactUs from './FooterLinks/ContactUs'
import PrivacyPolicy from './FooterLinks/PrivacyPolicy'
import TermsConditions from './FooterLinks/TermsConditions'
import TermsOfUse from './FooterLinks/TermsOfUse'
import Step1 from './LoanSteps/Step1'
import Step2 from './LoanSteps/Step2'
import Step3 from './LoanSteps/Step3'
import Step4 from './LoanSteps/Step4'
import Step5 from './LoanSteps/Step5'
import Loader from './Loader'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about-us' element={<About />} />
            <Route exact path='/faq' element={<Faq />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/emi-calculator' element={<Calculator />} />
            <Route exact path='/contact-us' element={<ContactUs />} />
            <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route exact path='/terms-conditions' element={<TermsConditions />} />
            <Route exact path='/terms-use' element={<TermsOfUse />} />
            <Route exact path='/loan-step-1' element={<Step1 />} />
            <Route exact path='/loan-step-2' element={<Step2/>} />
            <Route exact path='/loan-step-3' element={<Step3/>} />
            <Route exact path='/loan-step-4' element={<Step4/>} />
            <Route exact path='/loan-step-5' element={<Step5/>} />
            <Route exact path='/loader' element={<Loader/>} />


            <Route exact path='/popup' element={<Popup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
