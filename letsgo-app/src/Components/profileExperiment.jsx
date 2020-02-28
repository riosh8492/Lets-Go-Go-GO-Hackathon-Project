

var NewComponent = React.createClass(
  {
    render: function() {
      return (
        <div>
          {/* Hello world */}
          <div className="container">
            <div className="row profile">
              <div className="col-md-3">
                <div className="profile-sidebar">
                  {/* SIDEBAR USERPIC */}
                  <div className="profile-userpic">
                    <img src="/Users/hectorrios/gitHub-Hackathon-Fall-2019/HackathonTeam/letsgo-app/images/blankProfilePic.png" className="img-responsive" alt="" />
                  </div>
                  {/* END SIDEBAR USERPIC */}
                  {/* SIDEBAR USER TITLE */}
                  <div className="profile-usertitle">
                    <div className="profile-usertitle-name">
                      Marcus Doe
                    </div>
                    <div className="profile-usertitle-job">
                      Developer
                    </div>
                  </div>
                  {/* END SIDEBAR USER TITLE */}
                  {/* SIDEBAR BUTTONS */}
                  <div className="profile-userbuttons">
                    <button type="button" className="btn btn-success btn-sm">Follow</button>
                    <button type="button" className="btn btn-danger btn-sm">Message</button>
                  </div>
                  {/* END SIDEBAR BUTTONS */}
                  {/* SIDEBAR MENU */}
                  <div className="profile-usermenu">
                    <ul className="nav">
                      <li className="active">
                        <a href="#">
                          <i className="glyphicon glyphicon-home" />
                          Overview </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="glyphicon glyphicon-user" />
                          Account Settings </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="glyphicon glyphicon-ok" />
                          Tasks </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="glyphicon glyphicon-flag" />
                          Help </a>
                      </li>
                    </ul>
                  </div>
                  {/* END MENU */}
                </div>
              </div>
              <div className="col-md-9">
                <div className="profile-content">
                  Some user related content goes here...
                </div>
              </div>
            </div>
          </div>
          <center>
            <strong>Powered by <a href="http://j.mp/metronictheme" target="_blank">KeenThemes</a></strong>
          </center>
          <br />
          <br />
        </div>
      );
    }
  });