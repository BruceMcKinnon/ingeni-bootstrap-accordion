<?php
/**
 * Plugin Name:       Ingeni Bootstrap Accordion
 * Description:       A Gutenberg block for creating Bootstrap 5 accordions.
 * Version:           1.2.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            Bruce McKinnon, with thanks to Victor Shershnyov
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ingeni-bootstrap-accordion
 *
 * @package           ingeni-bootstrap-accordion
 */

function accordion_accordion_block_init() {
    register_block_type( __DIR__ . '/build/accordion' );
    register_block_type( __DIR__ . '/build/accordion-item' );

    	// Init auto-update from GitHub repo
	require 'plugin-update-checker/plugin-update-checker.php';
	$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
		'https://github.com/BruceMcKinnon/ingeni-bootstrap-accordion',
		__FILE__,
		'ingeni-bootstrap-accordion'
	);
}
add_action( 'init', 'accordion_accordion_block_init' );
