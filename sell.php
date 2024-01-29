<?php
   
   ini_set('display_errors', 1);
   ini_set('display_setup_errors', 1);
   error_reporting(E_ALL);
   
   const EMAIL_ADDR_INVALID = -1;
   const TERMS_REFUSED = -2;
   const DATE_INVALID = -3;
   
   $sellDatas = file_get_contents('sellDatas.json');
   
   $inputDatas = array();
   $inputNames = array(
      'full_name',
      'email_address',
      'type',
      'password',
      'date_day',
      'date_month',
      'date_year',
      'Members',
      'payment_method',
      'card_number',
      'card_cvc',
      'terms'
   );
   
   $sellDatasValid = function() {
      
      global $inputDatas, $inputNames;
      
      for ($i = 0; $i < count($inputNames); $i++) {
         
         if ( !isset($_POST[ $inputNames[$i] ]) ) {
            
            return false;
         } else {
            
            $inputDatas[ $inputNames[$i] ] = htmlspecialchars($_POST[ $inputNames[$i] ]);
         }
      }
      
      return true;
   };
   
   if ( $sellDatasValid() ) {
      
      // decode sell datas
      $sellDatas = json_decode($sellDatas);
      
      if ( !is_array($sellDatas) )
         $sellDatas = array();
      
      $sellDatas[] = $inputDatas;
      
      print_r($sellDatas);
      
      file_put_contents( 'sellDatas.json', json_encode($sellDatas, JSON_PRETTY_PRINT) );
   }
   