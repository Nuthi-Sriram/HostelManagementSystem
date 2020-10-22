<!DOCTYPE html>
<html class="transition-navbar-scroll top-navbar-xlarge bottom-footer" lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>Learning</title>

  <!-- Vendor CSS BUNDLE
    Includes styling for all of the 3rd party libraries used with this module, such as Bootstrap, Font Awesome and others.
    TIP: Using bundles will improve performance by reducing the number of network requests the client needs to make when loading the page. -->
  <link href="css/vendor/all.css" rel="stylesheet">

  <!-- Vendor CSS Standalone Libraries
        NOTE: Some of these may have been customized (for example, Bootstrap).
        See: src/less/themes/{theme_name}/vendor/ directory -->
  <!-- <link href="css/vendor/bootstrap.css" rel="stylesheet"> -->
  <!-- <link href="css/vendor/font-awesome.css" rel="stylesheet"> -->
  <!-- <link href="css/vendor/picto.css" rel="stylesheet"> -->
  <!-- <link href="css/vendor/material-design-iconic-font.css" rel="stylesheet"> -->
  <!-- <link href="css/vendor/datepicker3.css" rel="stylesheet"> -->
  <!-- <link href="css/vendor/jquery.minicolors.css" rel="stylesheet"> -->
  <!-- <link href="css/vendor/railscasts.css" rel="stylesheet"> -->
  <!-- <link href="css/vendor/owl.carousel.css" rel="stylesheet"> -->
  <!-- <link href="css/vendor/slick.css" rel="stylesheet"> -->
  <!-- <link href="css/vendor/daterangepicker-bs3.css" rel="stylesheet"> -->
  <!-- <link href="css/vendor/jquery.bootstrap-touchspin.css" rel="stylesheet"> -->
  <!-- <link href="css/vendor/select2.css" rel="stylesheet"> -->
  <!-- <link href="css/vendor/jquery.countdown.css" rel="stylesheet"> -->

  <!-- APP CSS BUNDLE [css/app/app.css]
INCLUDES:
    - The APP CSS CORE styling required by the "html" module, also available with main.css - see below;
    - The APP CSS STANDALONE modules required by the "html" module;
NOTE:
    - This bundle may NOT include ALL of the available APP CSS STANDALONE modules;
      It was optimised to load only what is actually used by the "html" module;
      Other APP CSS STANDALONE modules may be available in addition to what's included with this bundle.
      See src/less/themes/html/app.less
TIP:
    - Using bundles will improve performance by greatly reducing the number of network requests the client needs to make when loading the page. -->
  <link href="css/app/app.css" rel="stylesheet">

  <!-- App CSS CORE
This variant is to be used when loading the separate styling modules -->
  <!-- <link href="css/app/main.css" rel="stylesheet"> -->

  <!-- App CSS Standalone Modules
    As a convenience, we provide the entire UI framework broke down in separate modules
    Some of the standalone modules may have not been used with the current theme/module
    but ALL modules are 100% compatible -->

  <!-- <link href="css/app/essentials.css" rel="stylesheet" /> -->
  <!-- <link href="css/app/material.css" rel="stylesheet" /> -->
  <!-- <link href="css/app/layout.css" rel="stylesheet" /> -->
  <!-- <link href="css/app/sidebar.css" rel="stylesheet" /> -->
  <!-- <link href="css/app/sidebar-skins.css" rel="stylesheet" /> -->
  <!-- <link href="css/app/navbar.css" rel="stylesheet" /> -->
  <!-- <link href="css/app/messages.css" rel="stylesheet" /> -->
  <!-- <link href="css/app/media.css" rel="stylesheet" /> -->
  <!-- <link href="css/app/charts.css" rel="stylesheet" /> -->
  <!-- <link href="css/app/maps.css" rel="stylesheet" /> -->
  <!-- <link href="css/app/colors-alerts.css" rel="stylesheet" /> -->
  <!-- <link href="css/app/colors-background.css" rel="stylesheet" /> -->
  <!-- <link href="css/app/colors-buttons.css" rel="stylesheet" /> -->
  <!-- <link href="css/app/colors-text.css" rel="stylesheet" /> -->

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries
WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!-- If you don't need support for Internet Explorer <= 8 you can safely remove these -->
  <!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

</head>

<body>

  <!-- Fixed navbar -->
  <div class="navbar navbar-default navbar-fixed-top navbar-size-large navbar-size-xlarge paper-shadow" data-z="0" data-animated role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="navbar-brand navbar-brand-logo">
          <a class="svg" href="index.html">
            <svg viewBox="0 0 106 64" height="100%" width="100%" preserveAspectRatio="xMidYMid meet">
              <path d="M4.731,36.187h8.234v3.414H0.279V20.481h4.452V36.187z" />
              <path d="M21.094,39.878c-2.093,0-3.763-0.658-5.01-1.971c-1.248-1.313-1.872-2.959-1.872-4.938v-0.498
	c0-2.163,0.567-3.929,1.7-5.3c1.134-1.37,2.756-2.05,4.866-2.042c1.926,0,3.436,0.578,4.531,1.733
	c1.095,1.156,1.642,2.723,1.642,4.701v2.325h-8.116l-0.026,0.078c0.096,0.727,0.394,1.325,0.893,1.793s1.164,0.703,1.996,0.703
	c0.84,0,1.513-0.066,2.016-0.198c0.504-0.131,1.141-0.359,1.911-0.683l1.051,2.705c-0.622,0.456-1.425,0.834-2.41,1.136
	C23.281,39.726,22.223,39.878,21.094,39.878z M20.779,28.544c-0.639,0-1.119,0.228-1.438,0.683c-0.32,0.455-0.514,1.064-0.585,1.825
	l0.039,0.066h3.822v-0.341c0-0.718-0.149-1.269-0.446-1.655C21.873,28.737,21.409,28.544,20.779,28.544z" />
              <path d="M36.997,39.588c-0.123-0.227-0.234-0.481-0.335-0.761c-0.101-0.281-0.186-0.57-0.256-0.868
	c-0.42,0.587-0.928,1.053-1.523,1.399c-0.596,0.346-1.318,0.52-2.167,0.52c-1.348,0-2.445-0.391-3.29-1.169
	c-0.844-0.779-1.267-1.817-1.267-3.113c0-1.409,0.528-2.496,1.582-3.263c1.055-0.766,2.66-1.149,4.813-1.149h1.615v-1.011
	c0-0.604-0.142-1.068-0.427-1.392c-0.285-0.324-0.725-0.486-1.32-0.486c-0.508,0-0.886,0.12-1.136,0.361
	c-0.249,0.24-0.374,0.615-0.374,1.123l-4.294-0.013l-0.026-0.079c-0.061-1.296,0.477-2.379,1.615-3.251
	c1.138-0.871,2.644-1.306,4.518-1.306c1.751,0,3.172,0.438,4.261,1.313c1.091,0.875,1.635,2.127,1.635,3.756v5.358
	c0,0.762,0.063,1.466,0.191,2.115c0.127,0.647,0.317,1.29,0.571,1.93L36.997,39.588z M34.069,36.712c0.438,0,0.84-0.088,1.208-0.263
	c0.368-0.175,0.665-0.403,0.893-0.683v-2.22h-1.576c-0.701,0-1.21,0.171-1.53,0.513c-0.32,0.341-0.48,0.775-0.48,1.301
	c0,0.402,0.138,0.729,0.413,0.978C33.275,36.588,33.631,36.712,34.069,36.712z" />
              <path d="M51.115,29.306l-1.615-0.013c-0.508,0-0.924,0.085-1.248,0.256c-0.324,0.17-0.565,0.413-0.722,0.729
	v9.324h-4.439V25.392h4.176l0.158,2.088c0.297-0.744,0.691-1.322,1.182-1.733c0.49-0.412,1.064-0.617,1.72-0.617
	c0.21,0,0.425,0.015,0.643,0.046c0.219,0.031,0.412,0.068,0.578,0.112L51.115,29.306z" />
              <path d="M57.116,25.392l0.171,1.996c0.464-0.709,1.037-1.263,1.72-1.662c0.683-0.398,1.445-0.597,2.285-0.597
	c1.392,0,2.48,0.451,3.263,1.353c0.784,0.902,1.176,2.338,1.176,4.307v8.812h-4.439v-8.825c0-0.814-0.168-1.39-0.505-1.727
	c-0.337-0.337-0.834-0.506-1.491-0.506c-0.412,0-0.777,0.074-1.097,0.223c-0.319,0.149-0.593,0.355-0.82,0.617v10.217h-4.426V25.392
	H57.116z" />
              <path d="M72.796,39.602h-4.452V25.392h4.452V39.602z" />
              <path d="M79.599,25.392l0.171,1.996c0.464-0.709,1.037-1.263,1.72-1.662c0.683-0.398,1.446-0.597,2.286-0.597
	c1.391,0,2.479,0.451,3.263,1.353c0.783,0.902,1.175,2.338,1.175,4.307v8.812h-4.438v-8.825c0-0.814-0.169-1.39-0.506-1.727
	c-0.337-0.337-0.835-0.506-1.49-0.506c-0.412,0-0.778,0.074-1.097,0.223c-0.32,0.149-0.593,0.355-0.821,0.617v10.217h-4.425V25.392
	H79.599z" />
              <path d="M90.038,33.7c0-2.568,0.559-4.638,1.676-6.211c1.116-1.573,2.694-2.359,4.733-2.359
	c0.872,0,1.639,0.205,2.298,0.617c0.66,0.41,1.228,0.997,1.705,1.758l0.351-2.07h4.506v15.831c0,2.203-0.756,3.968-2.267,5.297
	c-1.513,1.329-3.547,1.995-6.105,1.995c-0.852,0-2.679-0.351-2.679-0.351s-1.821-0.548-2.663-0.944l0.837-3.805
	c0.751,0.324,1.467,0.565,2.147,0.723c0.679,0.158,1.456,0.237,2.328,0.237c1.055,0,1.862-0.285,2.421-0.852
	c0.557-0.569,0.837-1.345,0.837-2.33v-0.837c-0.467,0.598-1.01,1.052-1.628,1.362c-0.619,0.31-1.325,0.465-2.116,0.465
	c-2.029,0-3.6-0.752-4.711-2.253c-1.112-1.502-1.668-3.486-1.668-5.952V33.7z M95.169,34.019c0,1.34,0.196,2.383,0.586,3.128
	c0.39,0.747,1.047,1.12,1.971,1.12c0.559,0,1.038-0.087,1.439-0.259c0.401-0.172,0.733-0.437,0.997-0.792v-6.911
	c-0.254-0.386-0.581-0.685-0.982-0.898c-0.401-0.213-0.875-0.32-1.423-0.32c-0.913,0-1.572,0.421-1.979,1.263
	c-0.406,0.842-0.609,1.958-0.609,3.349V34.019z" />
              <path d="M89.645,42.239c-3.935-1.997-5.801-1.022-8.698-0.365c-2.523,0.572-11.7,3.366-23.909,3.575
	c-12.162,0.208-20.212-3.108-20.212-3.108s9.737,6.215,20.023,6.215c7.745,0,10.823-0.699,24.614-2.958
	c4.857-0.796,10.591,1.859,10.591,1.859l0.757-3.843L89.645,42.239z" />
              <circle cx="70.688" cy="19.042" r="3.167" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="main-nav">
        <ul class="nav navbar-nav navbar-nav-margin-left">
          <li class="dropdown active">
            <a href="index.html#" class="dropdown-toggle" data-toggle="dropdown">Pages <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li class="active"><a href="index.html">Home page</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="tutors.html">Tutors</a></li>
              <li><a href="survey.html">Survey</a></li>
              <li><a href="website-forum.html">Forum Home</a></li>
              <li><a href="website-forum-category.html">Forum Category</a></li>
              <li><a href="website-forum-thread.html">Forum Thread</a></li>
              <li><a href="website-blog.html">Blog Listing</a></li>
              <li><a href="website-blog-post.html">Blog Post</a></li>
              <li><a href="website-contact.html">Contact</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="index.html#" class="dropdown-toggle" data-toggle="dropdown">Courses <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="website-directory-grid.html">Grid Directory</a></li>
              <li><a href="website-directory-list.html">List Directory</a></li>
              <li><a href="website-course.html">Single Course</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="index.html#" class="dropdown-toggle" data-toggle="dropdown">Student <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="website-student-dashboard.html">Dashboard</a></li>
              <li><a href="website-student-courses.html">My Courses</a></li>
              <li><a href="website-take-course.html">Take Course</a></li>
              <li><a href="website-course-forums.html">Course Forums</a></li>
              <li><a href="website-take-quiz.html">Take Quiz</a></li>
              <li><a href="website-student-messages.html">Messages</a></li>
              <li><a href="website-student-profile.html">Private Profile</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="index.html#" class="dropdown-toggle" data-toggle="dropdown">Instructor <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="website-instructor-dashboard.html">Dashboard</a></li>
              <li><a href="website-instructor-courses.html">My Courses</a></li>
              <li><a href="website-instructor-course-edit-course.html">Edit Course</a></li>
              <li><a href="website-instructor-earnings.html">Earnings</a></li>
              <li><a href="website-instructor-statement.html">Statement</a></li>
              <li><a href="website-instructor-messages.html">Messages</a></li>
              <li><a href="website-instructor-profile.html">Private Profile</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a href="index.html#" class="dropdown-toggle" data-toggle="dropdown">UI <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="essential-buttons.html">Buttons</a></li>
              <li><a href="essential-icons.html">Icons</a></li>
              <li><a href="essential-progress.html">Progress</a></li>
              <li><a href="essential-grid.html">Grid</a></li>
              <li><a href="essential-forms.html">Forms</a></li>
              <li><a href="essential-tables.html">Tables</a></li>
              <li><a href="essential-tabs.html">Tabs</a></li>
            </ul>
          </li>
        </ul>
        <div class="navbar-right">
          <ul class="nav navbar-nav navbar-nav-bordered navbar-nav-margin-right">
            <!-- user -->
            <li class="dropdown user">
              <a href="index.html#" class="dropdown-toggle" data-toggle="dropdown">
                <img src="images/people/110/guy-6.jpg" alt="" class="img-circle" /> Bill<span class="caret"></span>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="website-student-dashboard.html"><i class="fa fa-bar-chart-o"></i> Dashboard</a></li>
                <li><a href="website-student-courses.html"><i class="fa fa-mortar-board"></i> My Courses</a></li>
                <li><a href="website-student-profile.html"><i class="fa fa-user"></i> Profile</a></li>
                <li><a href="login.html"><i class="fa fa-sign-out"></i> Logout</a></li>
              </ul>
            </li>
            <!-- // END user -->
          </ul>
          <a href="login.html" class="navbar-btn btn btn-primary">Log In</a>
        </div>
      </div>
      <!-- /.navbar-collapse -->

    </div>
  </div>

  <div class="parallax cover overlay cover-image-full home">
    <img class="parallax-layer" src="images/photodune-4161018-group-of-students-m.jpg" alt="Learning Cover" />
    <div class="parallax-layer overlay overlay-full overlay-bg-white bg-transparent" data-speed="8" data-opacity="true">
      <div class="v-center">
        <div class="page-section overlay-bg-white-strong relative paper-shadow" data-z="1">
          <h1 class="text-display-2 margin-v-0-15 display-inline-block">Courses for Web &amp; Mobile</h1>
          <p class="text-subhead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur consequatur distinctio earum ipsam.</p>
          <a class="btn btn-green-500 btn-lg paper-shadow" data-hover-z="2" data-animated data-toggle="modal" href="index.html#modal-overlay-signup">Sign Up - Only &dollar;19.00/mo</a>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="page-section-heading">
      <h2 class="text-display-1">Features</h2>
      <p class="lead text-muted">Learn about all of the features we offer.</p>
    </div>
    <div class="row" data-toggle="gridalicious">

      <div class="media">
        <div class="media-left padding-none">
          <div class="bg-green-300 text-white">
            <div class="panel-body">
              <i class="fa fa-film fa-2x fa-fw"></i>
            </div>
          </div>
        </div>
        <div class="media-body">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="text-headline">Watch Courses Offline</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut culpa fugiat iusto, molestias nemo nostrum quia rerum temporibus voluptatum.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="media">
        <div class="media-left padding-none">
          <div class="bg-purple-300 text-white">
            <div class="panel-body">
              <i class="fa fa-life-bouy fa-2x fa-fw"></i>
            </div>
          </div>
        </div>
        <div class="media-body">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="text-headline">Premium Support</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut culpa fugiat iusto, molestias nemo nostrum quia rerum temporibus voluptatum.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="media">
        <div class="media-left padding-none">
          <div class="bg-orange-400 text-white">
            <div class="panel-body">
              <i class="fa fa-user fa-2x fa-fw"></i>
            </div>
          </div>
        </div>
        <div class="media-body">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="text-headline">Learn from Top Tutors</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut culpa fugiat iusto, molestias nemo nostrum quia rerum temporibus voluptatum.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="media">
        <div class="media-left padding-none">
          <div class="bg-cyan-400 text-white">
            <div class="panel-body">
              <i class="fa fa-code fa-2x fa-fw"></i>
            </div>
          </div>
        </div>
        <div class="media-body">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="text-headline">Lesson Source Files</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut culpa fugiat iusto, molestias nemo nostrum quia rerum temporibus voluptatum.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="media">
        <div class="media-left padding-none">
          <div class="bg-pink-400 text-white">
            <div class="panel-body">
              <i class="fa fa-print fa-2x fa-fw"></i>
            </div>
          </div>
        </div>
        <div class="media-body">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="text-headline">Printed Diploma</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut culpa fugiat iusto, molestias nemo nostrum quia rerum temporibus voluptatum.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="media">
        <div class="media-left padding-none">
          <div class="bg-red-400 text-white">
            <div class="panel-body">
              <i class="fa fa-tasks fa-2x fa-fw"></i>
            </div>
          </div>
        </div>
        <div class="media-body">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="text-headline">New Lessons Every Day</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut culpa fugiat iusto, molestias nemo nostrum quia rerum temporibus voluptatum.</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
  <br/>

  <div class="page-section bg-white">
    <div class="container">

      <div class="text-center">
        <h3 class="text-display-1">Featured Courses</h3>
        <p class="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <br/>

      <div class="slick-basic slick-slider" data-items="4" data-items-lg="3" data-items-md="2" data-items-sm="1" data-items-xs="1">
        <div class="item">
          <div class="panel panel-default paper-shadow" data-z="0.5" data-hover-z="1" data-animated>
            <div class="panel-body">
              <div class="media media-clearfix-xs">
                <div class="media-left">
                  <div class="cover width-90 width-100pc-xs overlay cover-image-full hover">
                    <span class="img icon-block s90 bg-default"></span>
                    <span class="overlay overlay-full padding-none icon-block s90 bg-default">
                        <span class="v-center">
                            <i class="fa fa-github"></i>
                        </span>
                    </span>
                    <a href="website-course.html" class="overlay overlay-full overlay-hover overlay-bg-white">
                      <span class="v-center">
                            <span class="btn btn-circle btn-white btn-lg"><i class="fa fa-graduation-cap"></i></span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="media-body">
                  <h4 class="media-heading margin-v-5-3"><a href="website-course.html">Github Webhooks for Beginners</a></h4>
                  <p class="small margin-none">
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="panel panel-default paper-shadow" data-z="0.5" data-hover-z="1" data-animated>
            <div class="panel-body">
              <div class="media media-clearfix-xs">
                <div class="media-left">
                  <div class="cover width-90 width-100pc-xs overlay cover-image-full hover">
                    <span class="img icon-block s90 bg-primary"></span>
                    <span class="overlay overlay-full padding-none icon-block s90 bg-primary">
                        <span class="v-center">
                            <i class="fa fa-css3"></i>
                        </span>
                    </span>
                    <a href="website-course.html" class="overlay overlay-full overlay-hover overlay-bg-white">
                      <span class="v-center">
                            <span class="btn btn-circle btn-primary btn-lg"><i class="fa fa-graduation-cap"></i></span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="media-body">
                  <h4 class="media-heading margin-v-5-3"><a href="website-course.html">Awesome CSS with LESS Processing</a></h4>
                  <p class="small margin-none">
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="panel panel-default paper-shadow" data-z="0.5" data-hover-z="1" data-animated>
            <div class="panel-body">
              <div class="media media-clearfix-xs">
                <div class="media-left">
                  <div class="cover width-90 width-100pc-xs overlay cover-image-full hover">
                    <span class="img icon-block s90 bg-lightred"></span>
                    <span class="overlay overlay-full padding-none icon-block s90 bg-lightred">
                        <span class="v-center">
                            <i class="fa fa-windows"></i>
                        </span>
                    </span>
                    <a href="website-course.html" class="overlay overlay-full overlay-hover overlay-bg-white">
                      <span class="v-center">
                            <span class="btn btn-circle btn-red-500 btn-lg"><i class="fa fa-graduation-cap"></i></span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="media-body">
                  <h4 class="media-heading margin-v-5-3"><a href="website-course.html">Portable Environments with Vagrant</a></h4>
                  <p class="small margin-none">
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="panel panel-default paper-shadow" data-z="0.5" data-hover-z="1" data-animated>
            <div class="panel-body">
              <div class="media media-clearfix-xs">
                <div class="media-left">
                  <div class="cover width-90 width-100pc-xs overlay cover-image-full hover">
                    <span class="img icon-block s90 bg-brown"></span>
                    <span class="overlay overlay-full padding-none icon-block s90 bg-brown">
                        <span class="v-center">
                            <i class="fa fa-wordpress"></i>
                        </span>
                    </span>
                    <a href="website-course.html" class="overlay overlay-full overlay-hover overlay-bg-white">
                      <span class="v-center">
                            <span class="btn btn-circle btn-orange-500 btn-lg"><i class="fa fa-graduation-cap"></i></span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="media-body">
                  <h4 class="media-heading margin-v-5-3"><a href="website-course.html">WordPress Theme Development</a></h4>
                  <p class="small margin-none">
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="panel panel-default paper-shadow" data-z="0.5" data-hover-z="1" data-animated>
            <div class="panel-body">
              <div class="media media-clearfix-xs">
                <div class="media-left">
                  <div class="cover width-90 width-100pc-xs overlay cover-image-full hover">
                    <span class="img icon-block s90 bg-purple"></span>
                    <span class="overlay overlay-full padding-none icon-block s90 bg-purple">
                        <span class="v-center">
                            <i class="fa fa-jsfiddle"></i>
                        </span>
                    </span>
                    <a href="website-course.html" class="overlay overlay-full overlay-hover overlay-bg-white">
                      <span class="v-center">
                            <span class="btn btn-circle btn-purple-500 btn-lg"><i class="fa fa-graduation-cap"></i></span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="media-body">
                  <h4 class="media-heading margin-v-5-3"><a href="website-course.html">Modular JavaScript with Browserify</a></h4>
                  <p class="small margin-none">
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="panel panel-default paper-shadow" data-z="0.5" data-hover-z="1" data-animated>
            <div class="panel-body">
              <div class="media media-clearfix-xs">
                <div class="media-left">
                  <div class="cover width-90 width-100pc-xs overlay cover-image-full hover">
                    <span class="img icon-block s90 bg-default"></span>
                    <span class="overlay overlay-full padding-none icon-block s90 bg-default">
                        <span class="v-center">
                            <i class="fa fa-cc-visa"></i>
                        </span>
                    </span>
                    <a href="website-course.html" class="overlay overlay-full overlay-hover overlay-bg-white">
                      <span class="v-center">
                            <span class="btn btn-circle btn-white btn-lg"><i class="fa fa-graduation-cap"></i></span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="media-body">
                  <h4 class="media-heading margin-v-5-3"><a href="website-course.html">Easy Online Payments with Stripe</a></h4>
                  <p class="small margin-none">
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                    <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <br/>
        <a class="btn btn-lg btn-primary" href="website-directory-grid.html">Browse Courses</a>
      </div>

    </div>
  </div>

  <div class="parallax cover overlay height-300 margin-none">
    <img class="parallax-layer" data-auto-offset="true" data-auto-size="false" src="images/photodune-6745579-modern-creative-man-relaxing-on-workspace-m.jpg" alt="Learning Cover" />
    <div class="parallax-layer overlay overlay-full overlay-bg-white bg-transparent" data-opacity="true" data-speed="8">
      <div class="v-center">
        <div class="page-section">
          <h1 class="text-display-2 overlay-bg-white margin-v-0-15 inline-block">Feedback</h1>
          <br/>
          <p class="lead text-overlay overlay-bg-white-strong inline-block">How others use E-learning to improve their skills</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="page-section">
      <div class="row">
        <div class="col-md-4">
          <div class="testimonial">
            <div class="panel panel-default">
              <div class="panel-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet doloremque enim error id, inventore magni odio odit quo tenetur.</p>
              </div>
            </div>
            <div class="media v-middle">
              <div class="media-left">
                <img src="images/people/50/guy-8.jpg" alt="People" class="img-circle width-40" />
              </div>
              <div class="media-body">
                <p class="text-subhead margin-v-5-0">
                  <strong>Adrian D. <span class="text-muted">@ Mosaicpro Inc.</span></strong>
                </p>
                <p class="small">
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="testimonial">
            <div class="panel panel-default">
              <div class="panel-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet doloremque enim error id, inventore magni odio odit quo tenetur.</p>
              </div>
            </div>
            <div class="media v-middle">
              <div class="media-left">
                <img src="images/people/50/guy-6.jpg" alt="People" class="img-circle width-40" />
              </div>
              <div class="media-body">
                <p class="text-subhead margin-v-5-0">
                  <strong>Adrian D. <span class="text-muted">@ Mosaicpro Inc.</span></strong>
                </p>
                <p class="small">
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="testimonial">
            <div class="panel panel-default">
              <div class="panel-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet doloremque enim error id, inventore magni odio odit quo tenetur.</p>
              </div>
            </div>
            <div class="media v-middle">
              <div class="media-left">
                <img src="images/people/50/guy-3.jpg" alt="People" class="img-circle width-40" />
              </div>
              <div class="media-body">
                <p class="text-subhead margin-v-5-0">
                  <strong>Adrian D. <span class="text-muted">@ Mosaicpro Inc.</span></strong>
                </p>
                <p class="small">
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                  <span class="fa fa-fw fa-star-o text-yellow-800"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>

  </div>

  <div class="modal grow modal-overlay modal-backdrop-body fade" id="modal-overlay-signup">
    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
    <div class="modal-dialog">
      <div class="v-cell">
        <div class="modal-content">
          <div class="modal-body">

            <div class="wizard-container wizard-1" id="wizard-demo-1">
              <div data-scrollable-h>
                <ul class="wiz-progress">
                  <li class="active">Plan &amp; Payment</li>
                  <li>Account Setup</li>
                  <li>Personal Details</li>
                </ul>
              </div>
              <form action="index.html#" data-toggle="wizard" class="max-width-400 h-center">

                <fieldset class="step relative paper-shadow form-horizontal" data-z="2">
                  <div class="page-section-heading">
                    <h2 class="text-h3 margin-v-0">Payment</h2>
                    <h3 class="text-h4 margin-v-10 text-grey-400">Your plan is
                      <strong class="text-uppercase">learner</strong> for
                      <strong>&dollar;19.99/mo</strong>
                    </h3>
                    <a href="pricing.html">See pricing</a>
                  </div>
                  <hr/>
                  <div class="form-group">
                    <label for="credit-card" class="col-xs-4 control-label">Credit Card</label>
                    <div class="col-xs-8">
                      <div class="form-control-material">
                        <input type="text" class="form-control" id="credit-card" placeholder="**** **** **** 2422">
                        <label for="credit-card">Credit Card</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="card-expiration" class="col-xs-4 control-label">Expiration:</label>
                    <div class="col-xs-8">
                      <select id="card-expiration" data-toggle="select2">
                        <option value="1" selected>January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                      <select data-toggle="select2">
                        <option value="2015" selected>2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="cvv" class="col-xs-4 control-label">CVV</label>
                    <div class="col-xs-8">
                      <div class="form-control-material">
                        <input type="email" class="form-control" id="cvv" placeholder="123">
                        <label for="cvv">CVV</label>
                      </div>
                    </div>
                  </div>
                  <div class="text-right">
                    <button type="button" class="wiz-next btn btn-primary">Next</button>
                  </div>
                </fieldset>

                <fieldset class="step relative paper-shadow" data-z="2">
                  <div class="page-section-heading">
                    <h2 class="text-h3 margin-v-0">Create your account</h2>
                    <h3 class="text-h4 margin-v-10 text-grey-400">This is a multi step form</h3>
                  </div>
                  <div class="form-group form-control-material">
                    <input class="form-control" type="text" id="wiz-email" placeholder="Email" />
                    <label for="wiz-email">Email:</label>
                  </div>
                  <div class="form-group form-control-material">
                    <input class="form-control" type="password" id="wiz-password" placeholder="Password" />
                    <label for="wiz-password">Password:</label>
                  </div>
                  <div class="form-group form-control-material">
                    <input class="form-control" type="password" id="wiz-password2" placeholder="Confirm Password" />
                    <label for="wiz-password2">Confirm Password:</label>
                  </div>
                  <div class="row">
                    <div class="col-xs-6">
                      <button type="button" class="wiz-prev btn btn-default">Previous</button>
                    </div>
                    <div class="col-xs-6 text-right">
                      <button type="button" class="wiz-next btn btn-primary">Next</button>
                    </div>
                  </div>
                </fieldset>

                <fieldset class="step relative paper-shadow" data-z="2">
                  <div class="page-section-heading">
                    <h2 class="text-h3 margin-v-0">Personal Details</h2>
                    <h3 class="text-h4 margin-v-10 text-grey-400">Your personal details are safe with us</h3>
                  </div>
                  <div class="form-group form-control-material">
                    <input class="form-control" type="text" id="wiz-fname" placeholder="First name" />
                    <label for="wiz-fname">First name:</label>
                  </div>
                  <div class="form-group form-control-material">
                    <input class="form-control" type="tel" id="wiz-lname" placeholder="Last name" />
                    <label for="wiz-lname">Last name:</label>
                  </div>
                  <div class="form-group form-control-material">
                    <input class="form-control" type="text" id="wiz-phone" placeholder="Phone" />
                    <label for="wiz-phone">Phone:</label>
                  </div>
                  <div class="form-group form-control-material">
                    <textarea rows="5" class="form-control" id="wiz-address" placeholder="Your address"></textarea>
                    <label for="wiz-address">Address:</label>
                  </div>
                  <div class="row">
                    <div class="col-xs-6">
                      <button type="button" class="wiz-prev btn btn-default">Previous</button>
                    </div>
                    <div class="col-xs-6 text-right">
                      <button type="button" class="wiz-step btn btn-primary" data-target="0">Submit</button>
                    </div>
                  </div>
                </fieldset>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="footer-section">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-3">
          <h4 class="text-headline text-light">Corporate</h4>
          <ul class="list-unstyled">
            <li><a href="index.html#">About the company</a></li>
            <li><a href="index.html#">Company offices</a></li>
            <li><a href="index.html#">Partners</a></li>
            <li><a href="index.html#">Terms of use</a></li>
            <li><a href="index.html#">Privacy</a></li>
            <li><a href="index.html#">Contact us</a></li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3">
          <h4 class="text-headline text-light">Explore</h4>
          <ul class="list-unstyled">
            <li><a href="index.html">Courses</a></li>
            <li><a href="index.html">Tutors</a></li>
            <li><a href="index.html">Pricing</a></li>
            <li><a href="index.html">Become Tutor</a></li>
            <li><a href="index.html">Sign Up</a></li>
          </ul>
        </div>
        <div class="col-xs-12 col-md-6">
          <h4 class="text-headline text-light">Newsletter</h4>

          <div class="form-group">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Enter email here...">
              <span class="input-group-btn">
								<button class="btn btn-grey-800" type="button">Subscribe</button>
							  </span>
            </div>
          </div>
          <br/>
          <p>
            <a href="index.html#" class="btn btn-indigo-500 btn-circle"><i class="fa fa-facebook"></i></a>
            <a href="index.html#" class="btn btn-pink-500 btn-circle"><i class="fa fa-dribbble"></i></a>
            <a href="index.html#" class="btn btn-blue-500 btn-circle"><i class="fa fa-twitter"></i></a>
            <a href="index.html#" class="btn btn-danger btn-circle"><i class="fa fa-google-plus"></i></a>
          </p>

          <p class="text-subhead">
            &copy; 2015 Learning App by mosaicpro.
          </p>

        </div>
      </div>
    </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <strong>Learning</strong> v1.1.0 &copy; Copyright 2015
  </footer>
  <!-- // Footer -->

  <!-- Inline Script for colors and config objects; used by various external scripts; -->
  <script>
    var colors = {
      "danger-color": "#e74c3c",
      "success-color": "#81b53e",
      "warning-color": "#f0ad4e",
      "inverse-color": "#2c3e50",
      "info-color": "#2d7cb5",
      "default-color": "#6e7882",
      "default-light-color": "#cfd9db",
      "purple-color": "#9D8AC7",
      "mustard-color": "#d4d171",
      "lightred-color": "#e15258",
      "body-bg": "#f6f6f6"
    };
    var config = {
      theme: "html",
      skins: {
        "default": {
          "primary-color": "#42a5f5"
        }
      }
    };
  </script>

  <!-- Vendor Scripts Bundle
    Includes all of the 3rd party JavaScript libraries above.
    The bundle was generated using modern frontend development tools that are provided with the package
    To learn more about the development process, please refer to the documentation.
    Do not use it simultaneously with the separate bundles above. -->
  <script src="js/vendor/all.js"></script>

  <!-- Vendor Scripts Standalone Libraries -->
  <!-- <script src="js/vendor/core/all.js"></script> -->
  <!-- <script src="js/vendor/core/jquery.js"></script> -->
  <!-- <script src="js/vendor/core/bootstrap.js"></script> -->
  <!-- <script src="js/vendor/core/breakpoints.js"></script> -->
  <!-- <script src="js/vendor/core/jquery.nicescroll.js"></script> -->
  <!-- <script src="js/vendor/core/isotope.pkgd.js"></script> -->
  <!-- <script src="js/vendor/core/packery-mode.pkgd.js"></script> -->
  <!-- <script src="js/vendor/core/jquery.grid-a-licious.js"></script> -->
  <!-- <script src="js/vendor/core/jquery.cookie.js"></script> -->
  <!-- <script src="js/vendor/core/jquery-ui.custom.js"></script> -->
  <!-- <script src="js/vendor/core/jquery.hotkeys.js"></script> -->
  <!-- <script src="js/vendor/core/handlebars.js"></script> -->
  <!-- <script src="js/vendor/core/jquery.hotkeys.js"></script> -->
  <!-- <script src="js/vendor/core/load_image.js"></script> -->
  <!-- <script src="js/vendor/core/jquery.debouncedresize.js"></script> -->
  <!-- <script src="js/vendor/core/modernizr.js"></script> -->
  <!-- <script src="js/vendor/core/velocity.js"></script> -->
  <!-- <script src="js/vendor/tables/all.js"></script> -->
  <!-- <script src="js/vendor/forms/all.js"></script> -->
  <!-- <script src="js/vendor/media/slick.js"></script> -->
  <!-- <script src="js/vendor/charts/flot/all.js"></script> -->
  <!-- <script src="js/vendor/nestable/jquery.nestable.js"></script> -->
  <!-- <script src="js/vendor/countdown/all.js"></script> -->
  <!-- <script src="js/vendor/angular/all.js"></script> -->

  <!-- App Scripts Bundle
    Includes Custom Application JavaScript used for the current theme/module;
    Do not use it simultaneously with the standalone modules below. -->
  <script src="js/app/app.js"></script>

  <!-- App Scripts Standalone Modules
    As a convenience, we provide the entire UI framework broke down in separate modules
    Some of the standalone modules may have not been used with the current theme/module
    but ALL the modules are 100% compatible -->

  <!-- <script src="js/app/essentials.js"></script> -->
  <!-- <script src="js/app/material.js"></script> -->
  <!-- <script src="js/app/layout.js"></script> -->
  <!-- <script src="js/app/sidebar.js"></script> -->
  <!-- <script src="js/app/media.js"></script> -->
  <!-- <script src="js/app/messages.js"></script> -->
  <!-- <script src="js/app/maps.js"></script> -->
  <!-- <script src="js/app/charts.js"></script> -->

  <!-- App Scripts CORE [html]:
        Includes the custom JavaScript for this theme/module;
        The file has to be loaded in addition to the UI modules above;
        app.js already includes main.js so this should be loaded
        ONLY when using the standalone modules; -->
  <!-- <script src="js/app/main.js"></script> -->

</body>

</html>