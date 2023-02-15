<?php
/**
 * Plugin Name:       Ingeni Bootstrap Accordion
 * Description:       A Gutenberg block for creating Bootstrap 5 accordions.
 * Version:           1.0.0
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
}
add_action( 'init', 'accordion_accordion_block_init' );
