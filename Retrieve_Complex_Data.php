<?php


$lxAction = filter_input(INPUT_POST, 'lcAction');
$lxSearchKey = filter_input(INPUT_POST, 'lcSearchKey');
$lxMainCategory = filter_input(INPUT_POST, 'lcMainCategory');
$lxSubCategory = filter_input(INPUT_POST, 'lcSubCategory');
$lxBrand = filter_input(INPUT_POST, 'lcBrand');
$lxModel = filter_input(INPUT_POST, 'lcModel');
$lxVendor = filter_input(INPUT_POST, 'lcVendor');
$lxFilterByCategory = filter_input(INPUT_POST, 'm0FilterByCategory');
$lxFilterByTyreType = filter_input(INPUT_POST, 'm0FilterByTyreType');
$lxFilterByModel = filter_input(INPUT_POST, 'm0FilterByModel');
$lxFilterByBrand = filter_input(INPUT_POST, 'm0FilterByBrand');
$lxIncludeTwinPacks = filter_input(INPUT_POST, 'm0IncludeTwinPacks');

$cookie_name = "currencyCode";

if (isset($_COOKIE[$cookie_name])) {

    switch ($_COOKIE[$cookie_name]) {
        case "AUD" :
            $lxCurrencyCode = 'currency_aud';
            $lxBestVendor = 'best_vendor_aud';
            $lxCurrency_URL = 'aud_URL';
            break;
        case "CAD" :
            $lxCurrencyCode = 'currency_cad';
            $lxBestVendor = 'best_vendor_cad';
            $lxCurrency_URL = 'cad_URL';
            break;
        case "EUR" :
            $lxCurrencyCode = 'currency_eur';
            $lxBestVendor = 'best_vendor_eur';
            $lxCurrency_URL = 'eur_URL';
            break;
        case "GBP" :
            $lxCurrencyCode = 'currency_gbp';
            $lxBestVendor = 'best_vendor_gbp';
            $lxCurrency_URL = 'gbp_URL';
            break;
        case "JPY" :
            $lxCurrencyCode = 'currency_jpy';
            $lxBestVendor = 'best_vendor_jpy';
            $lxCurrency_URL = 'jpy_URL';
            break;
        case "NZD" :
            $lxCurrencyCode = 'currency_nzd';
            $lxBestVendor = 'best_vendor_nzd';
            $lxCurrency_URL = 'nzd_URL';
            break;
        case "USD" :
            $lxCurrencyCode = 'currency_usd';
            $lxBestVendor = 'best_vendor_usd';
            $lxCurrency_URL = 'usd_URL';
            break;
    }
} else {
    $lxCurrencyCode = 'currency_usd';
    $lxBestVendor = 'best_vendor_usd';
    $lxCurrency_URL = 'usd_URL';
}


if (strpos($lxAction, 'Master') !== false) {
    $columns = array(
        array('db' => 'brand', 'dt' => 0),
        array('db' => 'model', 'dt' => 1),
        array('db' => $lxCurrencyCode, 'dt' => 2),
        array('db' => 'qty', 'dt' => 3),
        array('db' => 'image_URL', 'dt' => 4),
        array('db' => 'size', 'dt' => 5),
        array('db' => 'weight', 'dt' => 6),
        array('db' => 'category', 'dt' => 7),
        array('db' => 'model_URL', 'dt' => 8),
        array('db' => 'model_descrip', 'dt' => 9),
        array('db' => 'shortdescr', 'dt' => 10),
        array('db' => 'image_SM', 'dt' => 11),
        array('db' => $lxBestVendor, 'dt' => 12),
        array('db' => 'extraName', 'dt' => 13),
        array('db' => 'dteprfmd', 'dt' => 'dteprfmd')
    );
    $order = "";
}

if (strpos($lxAction, '.Detailed') !== false) {
    $columns = array(
        array('db' => 'vendor', 'dt' => 0),
        array('db' => 'style', 'dt' => 1),
        array('db' => $lxCurrencyCode, 'dt' => 2),
        array('db' => 'brand', 'dt' => 3),
        array('db' => 'MasterSKU_Names', 'dt' => 4),
        array('db' => 'prodSKU', 'dt' => 5),
        array('db' => 'model', 'dt' => 6),
        array('db' => 'currency', 'dt' => 7),
        array('db' => 'shipping', 'dt' => 8),
        array('db' => 'inStock', 'dt' => 9),
        array('db' => 'category', 'dt' => 10),
        array('db' => $lxCurrency_URL, 'dt' => 'url'),
        array('db' => 'dteprfmd', 'dt' => 12),
        array('db' => 'processed', 'dt' => 'processed'),
        array('db' => 'extraName', 'dt' => 'extraName')
    );
    $order = "";
}

if (strpos($lxAction, 'Survey') !== false) {
    $table = 'survey_responses';
    $primaryKey = 'recno';
    $columns = array(
        array('db' => 'recno', 'dt' => 'recno'),
        array('db' => 'survey_name', 'dt' => 'survey_name'),
        array('db' => 'user_nickname', 'dt' => 'user_nickname'),
        array('db' => 'user_datetime', 'dt' => 'user_datetime'),
        array('db' => 'user_ip', 'dt' => 'user_ip'),
        array('db' => 'user_country', 'dt' => 'user_country'),
        array('db' => 'user_region', 'dt' => 'user_region'),
        array('db' => 'user_city', 'dt' => 'user_city'),
        array('db' => 'user_response_q01', 'dt' => 'user_response_q01'),
        array('db' => 'user_response_q02', 'dt' => 'user_response_q02'),
        array('db' => 'user_response_q03', 'dt' => 'user_response_q03'),
        array('db' => 'user_response_q04', 'dt' => 'user_response_q04'),
        array('db' => 'user_response_q05', 'dt' => 'user_response_q05'),
        array('db' => 'user_response_q06', 'dt' => 'user_response_q06'),
        array('db' => 'user_response_q07', 'dt' => 'user_response_q07'),
        array('db' => 'user_response_q08', 'dt' => 'user_response_q08'),
        array('db' => 'user_response_q09', 'dt' => 'user_response_q09'),
        array('db' => 'user_response_q09', 'dt' => 'user_response_q10'),
        array('db' => 'user_response_q09', 'dt' => 'user_response_q11'),
        array('db' => 'user_response_q09', 'dt' => 'user_response_q12'),
        array('db' => 'user_response_q09', 'dt' => 'user_response_q13'),
        array('db' => 'user_response_q09', 'dt' => 'user_response_q14'),
        array('db' => 'user_response_q09', 'dt' => 'user_response_q15'),
        array('db' => 'user_response_q09', 'dt' => 'user_response_q16'),
        array('db' => 'user_response_q09', 'dt' => 'user_response_q17'),
        array('db' => 'user_response_q09', 'dt' => 'user_response_q18'),
        array('db' => 'user_response_q09', 'dt' => 'user_response_q19'),
        array('db' => 'user_response_q09', 'dt' => 'user_response_q20')
    );
    $order = "";
}

switch ($lxAction) {
    case "Master.List" :
        switch ($lxMainCategory) {
            case "Tyres" :
                $table = 'MasterList_Tyres_and_Tubes';
                break;

            case "Components" :
                $table = 'MasterList_Components';
                break;

            case "Wheelsets" :
                $table = 'MasterList_Wheelsets';
                break;

            case "Accessories" :
                $table = 'MasterList_Accessories';
                break;
        }

        $primaryKey = 'brand';

        $where = "{$lxCurrencyCode} > 0 and brand LIKE '%{$lxFilterByBrand}%' and "
                . "category LIKE '%{$lxFilterByCategory}%' and "
                . "model LIKE '%{$lxFilterByModel}%' and "
                . "model LIKE '%{$lxFilterByTyreType}%' ";


        if ($lxFilterByCategory == 'Twin_Packs') {
            $where = "{$lxCurrencyCode} > 0 and brand LIKE '%{$lxFilterByBrand}%' and "
                    . "model LIKE '%{$lxFilterByModel}%' and "
                    . "model LIKE '%Twin Pack%' and "
                    . "model LIKE '%{$lxFilterByTyreType}%' ";
        }
        break;


    case "Master.Single" :
        switch ($lxMainCategory) {
            case "Tyres" :
                $table = 'MasterList_Tyres_and_Tubes';
                break;
            case "Components" :
                $table = 'MasterList_Components';
                break;
            case "Wheelsets" :
                $table = 'MasterList_Wheelsets';
                break;

            case "Accessories" :
                $table = 'MasterList_Accessories';
                break;
        }

        $primaryKey = 'brand';
        $where = "brand = '" . $lxBrand . "' and category LIKE '%{$lxFilterByCategory}%' and model_URL = '" . $lxModel . "' ";
//        $where = "model_URL = '" . $lxModel . "' ";
        break;


    case "Extra.Detailed" :
        switch ($lxMainCategory) {
            case "Tyres.Detailed" :
                $table = 'ExtraList_Tyres_and_Tubes';
                break;
            case "Components.Detailed" :
                $table = 'ExtraList_Components';
                break;
            case "Wheelsets.Detailed" :
                $table = 'ExtraList_Wheelsets';
                break;
            case "Accessories.Detailed" :
                $table = 'ExtraList_Accessories';
                break;
        }
        $primaryKey = 'brand';
        $where = $lxCurrencyCode . " > 0 and brand = '" . $lxBrand . "' and model = '" . $lxModel . "' and vendor = '" . $lxVendor . "' ORDER BY " . $lxCurrencyCode;
//        $where = $lxCurrencyCode . " > 0 and model = '" . $lxModel . "'";
//            echo "OK,  made it this far....   lcSearch = " . $lxMainCategory;
//            return ;

        break;


    case "Tyres.Detailed" :
        $table = 'DetailsList_Tyres_and_Tubes';
        $primaryKey = 'brand';
        $where = $lxCurrencyCode . " > 0 and model = '" . $lxModel . "'";
//            echo "OK,  made it this far....   lcSearch = " . $lxSearchkey;
//            return ;

        break;


    case "Components.Detailed" :
        $table = 'DetailsList_Components';
        $primaryKey = 'brand';
        $where = "brand = '{$lxBrand}' and model = '" . $lxModel . "' and " . $lxCurrencyCode . " > 0 ";
        break;


    case "Wheelsets.Detailed" :
        $table = 'DetailsList_Wheelsets';
        $primaryKey = 'brand';
        $where = $lxCurrencyCode . " > 0 and model LIKE '{$lxModel}' and category LIKE '%{$lxFilterByCategory}%'";
        break;


    case "Accessories.Detailed" :
        $table = 'DetailsList_Accessories';
        $primaryKey = 'brand';
        $where = $lxCurrencyCode . " > 0 and model LIKE '{$lxModel}' and category LIKE '%{$lxFilterByCategory}%'";
        break;


    case "Hits.Detailed" :
        $table = 'logfile_hits_detailed';
        $primaryKey = 'user_datetime';
        $columns = array(
            array('db' => 'user_datetime',      'dt' => 'user_datetime'),
            array('db' => 'action',             'dt' => 'action'),
            array('db' => 'brand',              'dt' => 'brand'),
            array('db' => 'model',              'dt' => 'model'),
            array('db' => 'user_ip',            'dt' => 'user_ip'),
            array('db' => 'user_city',          'dt' => 'user_city'),
            array('db' => 'user_region',        'dt' => 'user_region'),
            array('db' => 'user_request_URI',   'dt' => 'user_request_URI'),
            array('db' => 'user_agent',         'dt' => 'user_agent'),
            array('db' => 'user_http_referer',  'dt' => 'user_http_referer'),
            array('db' => 'user_country',       'dt' => 'user_country')
        );
        //$where = "user_datetime BETWEEN '2015-01-01 00:00:00' AND '2019-01-01 23:59:59'";
        $where = "";
        break;


    case "Survey_Responses" :
        $table = 'survey_responses';
        $primaryKey = 'recno';
        $where = "";
        break;


    case "Single_Survey_Record" :
        $table = 'survey_responses';
        $primaryKey = 'recno';
        $where = "recno = " . $lxSearchKey;
        break;


    case "Technicians" :
        $table = 'technicians';
        $primaryKey = 'techID';
        $columns = array(
            array('db' => 'techID', 'dt' => 0),
            array('db' => 'firstName', 'dt' => 1),
            array('db' => 'lastName', 'dt' => 2),
            array('db' => 'email', 'dt' => 3),
            array('db' => 'phone', 'dt' => 4),
            array('db' => 'password', 'dt' => 5)
        );
        $where = "techID = " . $lxSearchkey;
        break;


    case "Technician_Incidents" :
        $table = 'incidents';
        $primaryKey = 'incidentID';
        $columns = array(
            array('db' => 'incidentID', 'dt' => 0),
            array('db' => 'customerID', 'dt' => 1),
            array('db' => 'productCode', 'dt' => 2),
            array('db' => 'techID', 'dt' => 3),
            // array( 'db' => 'dateopened',     'dt' => 4 ),
            array('db' => 'dateopened', 'dt' => 4),
            array('db' => 'title', 'dt' => 5),
            array('db' => 'description', 'dt' => 6)
        );
        $where = "customerID = " . $lxSearchkey;
        break;


    case "Customers" :
        $table = 'customers';
        $primaryKey = 'customerID';
        $columns = array(
            array('db' => 'customerID', 'dt' => 0),
            array('db' => 'firstName', 'dt' => 1),
            array('db' => 'lastName', 'dt' => 2),
            array('db' => 'phone', 'dt' => 3),
            array('db' => 'email', 'dt' => 4),
            array('db' => 'password', 'dt' => 5)
        );
        $where = "customerID = " . $lxSearchkey;
        break;


    default :
        echo '<img src="https://www.storelocatorwidgets.com/home-react/images/support/OopsSomethingWentWrong.png" />';
        //echo "Default Response Case Structure:  Not a valid Action parameter";
        return;
}





/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * If you just want to use the basic configuration for DataTables with PHP
 * server-side, there is no need to edit below this line.
 */
$sql_details = include 'config.php';
require('ssp.class.php' );
//  echo "OK,  got as far as line 486 \n" ;
//  echo "OK,  got as far as line 522 \n";


if (isset($_POST['search']) && $_POST['search']['value'] != '') {
// if ( $lxAction === "Master.Handset_Search_List" || (isset($_POST['search']) && $_POST['search']['value'] != '') ) {
    $test_output = F0_safe_json_encode(SSP::simple($_POST, $sql_details, $table, $primaryKey, $columns));
} else {
    $test_output = F0_safe_json_encode(SSP::complex($_POST, $sql_details, $table, $primaryKey, $columns, $where));
}




$test_output = F0_safe_json_encode(SSP::complex($_POST, $sql_details, $table, $primaryKey, $columns, $where));
if (strlen($test_output) <= 2) {
    echo json_last_error();
    echo json_last_error_msg();
} else {
    echo $test_output;
}
if ($lxAction == "Master.Single" || $lxAction == "Master.List") {
    F0_StoreTheHit(filter_input(INPUT_POST, 'lcAction'));
    /*     
     * 
     * The logic for storing the hit is now called by AJAX in the client's javascript.  We do this to abstract the performance issues.
     * The program to refer to is called SQL_Log_The_Hit.php
     * 
     */
}
return;





























function F0_StoreTheHit($lxAction) {
    return;
}

function F0_safe_json_encode($value) {
    if (version_compare(PHP_VERSION, '5.4.0') >= 0) {
        $encoded = json_encode($value, JSON_PRETTY_PRINT);
    } else {
        $encoded = json_encode($value);
    }
    switch (json_last_error()) {
        case JSON_ERROR_NONE:
            return $encoded;
        case JSON_ERROR_DEPTH:
            return 'Maximum stack depth exceeded'; // or trigger_error() or throw new Exception()
        case JSON_ERROR_STATE_MISMATCH:
            return 'Underflow or the modes mismatch'; // or trigger_error() or throw new Exception()
        case JSON_ERROR_CTRL_CHAR:
            return 'Unexpected control character found';
        case JSON_ERROR_SYNTAX:
            return 'Syntax error, malformed JSON'; // or trigger_error() or throw new Exception()
        case JSON_ERROR_UTF8:
            $clean = F0_utf8ize($value);
            return F0_safe_json_encode($clean);
        default:
            return 'Unknown error'; // or trigger_error() or throw new Exception()
    }
}

function F0_utf8ize($mixed) {
    if (is_array($mixed)) {
        foreach ($mixed as $key => $value) {
            $mixed[$key] = F0_utf8ize($value);
        }
    } else if (is_string($mixed)) {
        return utf8_encode($mixed);
    }
    return $mixed;
}

?>
