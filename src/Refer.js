import React from "react";
import './Refer.css'
import {Link} from 'react-router-dom'
import last from './Images/last.png'
import friends from './Images/friends.png'
import  rupee from './Images/rupee.png'
import star from './Images/star.png'
import tag from './Images/tag.png'
function Refer(){
    return(
        <div className="refer">
            <div className="d-flex links1"> 
                <Link to="/" className="links"><b>UI/UX</b></Link>
                <span>{'>'}</span>
                <Link to="/" className="links"><b>Refer & Earn</b></Link>
            </div>
          <div className="row">
            <div className="col-sm-1">

            </div>
            <div className="col-sm-10 col-12 col-md-5 money">
                <div className="d-flex mt-2">
                    <div className="xyzm ">
                       <b>Referral Earns</b>
                       <h6 className="mt-2 ">$2,500</h6>
                    </div>
                
                <div className=" xyzm1">
                     <b>Total Referrals</b>
                     <h6 className="mt-2">7</h6>
                </div>
                </div>
                <div className=" d-flex mt-3">
                    <div className="xyzm">
                       <b>Wallet Money</b>
                       <h6 className="mt-2">$500</h6>
                    </div>
                <div className="xyzm2">
                     <b className="text-light pt-2  ps-4 pe-4">Withdraw</b>
                </div>
            </div>
           </div>
            <div className="col-sm-1">

            </div>
            <div className="col-sm-3 col-6 mt-5 ms-3">
                 <b><h5 className="refercode">Your Referral Code</h5></b>
                 <p className="code">E  D  C  H  5  4</p>
            </div>
            <div className="col-sm-1">

            </div>
          </div>
          <div >
            <b><h4 className="footer1">How does it Work?</h4></b>
            <div className="row">
            <div className="footer col-5 d-flex ">
                <div>
                  <img className="img1" src={friends}/>
                </div>
                <div>
                <h5>
                    Invite your Friends
                </h5>
                <p>share the link tutuedude.com with your friends</p>
                </div>
            </div>
            <div className="col-1"></div>
            <div className="footer col-5 d-flex ">
                <div>
                  <img className="img1" src={tag}/>
                </div>
                <div>
                <h5>
                    Friend purchases any course
                </h5>
                <p>Using your REFERRAL CODE in the payments page</p>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="footer col-5 d-flex ">
                <div>
                    <img className="img1" src={rupee}/>
                </div>
            <div>
            <h5>
                    You get $200 as referal money
                </h5>
                <p>On total purchase the friend makes, into your wallet</p>
            </div>
            </div>
            <div className="col-1">
                
            </div>

            <div className="footer col-5 d-flex ">
            <div><img className="img1" src={star} alt="Star"/></div>
            <div>
            <h5>
                    Your friends get $200 Off
                </h5>
                <p>On his overall fee onn successfull purchase using your referral code</p>
            </div>
            </div>
            </div>

            <div className=" d-flex footer2">
            <div>
            <img className="img1" src={last} alt="Last"/>
            </div>
            <div >
            <h5>
                    Transfer money from wallet
                </h5>
                <p>when the wallet balance reaches $200 or more, tou can withdraw it</p>
            
            </div>
                </div>
            
            
          </div>
        </div>
    )
}
export default Refer;