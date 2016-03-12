<?php
class Sites extends Controller {

/*the filename, class name, constructor function names and this variable are the only thing you need to change: to the name of the table/ controller (First letter in upper case for the Class name and consturcotr function, lower case for the file and variable.lower case!)*/
    var $controller	= 'sites';

/*constructor function*/
    function Sites()
    {
          parent::Controller();
          $this->load->model('crud');
    }

/*function to update an entry (if an ID is sent) or to insert a new one. Also includes validation, courtesy of CI */	
   function insert($id)
   {
          $this->crud->insert($this->controller, $id);	
   }

/*interim function to pass post data from an update or insert through to Crud model, which can't receive it directly*/
   function interim()
   {
          $this->crud->insert2($this->controller, $_POST);  
   }

/*function to delete an entry, needs table name and id. If called directly, needs parameters passed to function; if not, from Post array*/
    function delete($idno=0, $state='no')
    {
          if(isset($_POST['id'])&& $_POST['id'] > 0)
                 {$idno = $_POST['id'];}
          if(isset($_POST['submit']))
                 {$state = $_POST['submit'];}
          $this->crud->delete($this->controller, $idno, $state);
    }

/*function to show all entries for a table*/
   function showall()
   {
          $this->crud->showall($this->controller, $message);
   }


/*function to show all data in a table, but doesn't allow any alterations*/
   function read()
   {
          $this->crud->read($this->controller); 
   }

/*function to set off the test suite on the 'crud' model. This function need only appear in one controller, as these tests are made on a temporary test table so that your real data is not affected*/
   function test()
   {
   $this->crud->test();  
   }
}
?>
