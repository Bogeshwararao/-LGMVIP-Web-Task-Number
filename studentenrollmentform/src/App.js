
import './App.css';

function App() {
  return (
   <>
       <div data-aos="fade-up">
    <form >      
     <section>
      <div
        class="d-flex flex-column min-vh-100 justify-content-center"
      >
        <div class="container">
          <div class="row" >
<div class="col-sm-12 col-md-10 mx-auto bg-white rounded shadow">
              <div class="row">
                <div class="col-md-6">
                  <div class="m-5 text-center"><h1>Welcome!</h1></div>

                  <form class="m-5">
                    <div class="mb-3">
                      <label class="form-label" for="username">Username :</label>
                      <input  id="username" class="form-control" type="text"  placeholder="Enter your name" required
                     />
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="username">Website :</label>
                      <input  id="username" class="form-control" type="text"  placeholder="Website" required
                     />
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="username">ImageLink :</label>
                      <input  id="username" class="form-control" type="text"  placeholder="Image link" required
                     />
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="email">E-mail :</label>
                      <input
                      placeholder="Enter your email" required
                        class="form-control"
                        type="email"
                
                        />
                         <div class="mb-3">
                         <label class="form-label" for="phone">GENDER:</label>
                         <br></br>
                          <select name="gender"> <option value=""> Select </option> <option value="Male">Male</option> <option value="Female">Female</option> </select> 
            </div>
                                 </div>
                                 <div class="mb-3">
                                 <label class="form-label" for="phone">Skills:</label><br></br>
                                 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1">JAVA</label><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1">PYTHON</label><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1">C</label><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> CPP</label><br></br>
                                 </div>
                    <div class="">
                      <input
                      id="btn-form"
                        type="Submit"
                        class="form-control btn btn-primary mt-3"
                      />
                    </div>
                  </form>
                </div>
                <div class="col-md-6">
                  <div id="contact-img">
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </form>
    </div>
    </>
  );
}

export default App;
