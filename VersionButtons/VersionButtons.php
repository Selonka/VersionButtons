<?php

  /** Plugin declaration
   * extends MantisPlugin
   * Use at own risk no warranty!
   */

class VersionButtonsPlugin extends MantisPlugin  
 {
## Register
 function register()
    {
      $this->name = 'Version Buttons';
      $this->description = 'A Plugin to mirror "add Version" and "add version and edit" buttons to the top of Versions form on project page';
      $this->page = '';

      $this->version = '0.0.1';
      $this->requires = array(
        "MantisCore" => "2.0.0",
      );

      $this->author = 'Selonka';
      $this->contact = '';
      $this->url = '';
    }
function init()
	{
	}
# Hooks 
 function hooks()
      {
        return array(
          "EVENT_LAYOUT_RESOURCES" => 'addVersionButtons'
        );
      }
 
 function addVersionButtons($event, $prj_id){
    $t_page = array_key_exists( 'REQUEST_URI', $_SERVER ) ? basename( parse_url( $_SERVER['REQUEST_URI'], PHP_URL_PATH ) ) : basename( __FILE__ );
    if( $t_page == 'manage_proj_edit_page.php' ) {
      return '<script type="text/javascript" src="' . plugin_file( 'VersionButton.js' ) . '"></script>';
    } 
  }

}
