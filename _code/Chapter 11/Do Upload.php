<?php
/*constructor function to initialize controller and load the file upload class, plus the two other helpers it needs */

class Upload extends Controller {

   function Upload()
    {
          parent::Controller();
          $this->load->helper(array('form', 'url'));
          $this->load->library('upload');
    }

/*now the function which does all the work!*/

function do_upload()
   {

          if ( ! $this->upload->do_upload())
          {
                 $error = array('error' => $this->upload->display_errors());

                 $this->load->view('upload_form', $error);
          }
          else
          {
                 $data = array('upload_data' => $this->upload->data());

                 $this->load->view('upload_success', $data);
          }
   }
}
