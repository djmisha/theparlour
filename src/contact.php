<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Request an Invitation | The Parlour — San Diego's Exclusive Magic Society</title>
    <meta name="description" content="Petition for admission to The Parlour, San Diego's most exclusive private society of magicians. Submit your application and our Council will review your candidacy.">
    <meta name="keywords" content="join magic club San Diego, exclusive magic society application, San Diego magician membership, private magic club, magic club invitation">
    <meta name="author" content="The Parlour — San Diego's Exclusive Society of Magic">
    <meta property="og:title" content="Request an Invitation | The Parlour — San Diego Magic">
    <meta property="og:description" content="Petition for admission to San Diego's most exclusive society of magicians. The Parlour accepts only those with genuine dedication to the art.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://ring76.com/contact">

    <?php include_once('includes/styles.php'); ?>
</head>
<body>

<?php
// Include site header with navigation
include_once('includes/header.php');
?>

<main>
    <!-- Hero Section -->
    <section class="hero-section content-hero content-hero-contact">
        <div class="content-container">
            <h1>Request an Invitation</h1>
            <p class="lead">The first step on a journey few are chosen to take</p>
        </div>
    </section>

     <!-- Application Form Section -->
     <section class="attending-info">
        <div class="content-container">
          <h2>Submit Your Petition</h2>
          <?php
           // Include Contact Form
           include_once('includes//sections/contact-form.php');
           ?>
        </div>
    </section>

    <!-- Membership Section -->
    <section class="location-details">
        <div class="content-container">
            <h2>The Admission Process</h2>
            <div class="content-row">
                <div class="content-col content-col-full">
                    <div class="content-details-card">
                        <h3>How Admission Works</h3>
                        <p>Admission to The Parlour is a deliberate and thorough process, designed to ensure that every member shares our commitment to excellence, secrecy, and the elevation of magic as an art form.</p>
                        
                        <div class="content-row content-mt-medium">
                            <div class="content-col content-col-full">
                                <div class="expectation-item">
                                    <span class="emoji-icon">1️⃣</span>
                                    <div>
                                        <h4>Submit Your Petition</h4>
                                        <p>Complete the application form above with details about your experience, your disciplines, and what draws you to the art of magic. A referral from a current member strengthens your petition.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="content-col content-col-full content-mt-medium">
                                <div class="expectation-item">
                                    <span class="emoji-icon">2️⃣</span>
                                    <div>
                                        <h4>Council Review</h4>
                                        <p>Our Council reviews all petitions carefully. If your application demonstrates genuine dedication and aligns with our values, you will be contacted for a private interview.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="content-col content-col-full content-mt-medium">
                                <div class="expectation-item">
                                    <span class="emoji-icon">3️⃣</span>
                                    <div>
                                        <h4>Private Invitation</h4>
                                        <p>Qualified candidates are invited to attend a single gathering as our guest — an opportunity to experience The Parlour firsthand, and for our members to welcome you.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="content-col content-col-full content-mt-medium">
                                <div class="expectation-item">
                                    <span class="emoji-icon">4️⃣</span>
                                    <div>
                                        <h4>Demonstration of Craft</h4>
                                        <p>As the final step, candidates present a brief demonstration of their art before the Council. This is not a test of perfection — it is an opportunity to share your passion, your style, and your connection to the craft.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="content-col content-col-full content-mt-medium">
                                <div class="expectation-item">
                                    <span class="emoji-icon">5️⃣</span>
                                    <div>
                                        <h4>Initiation</h4>
                                        <p>Upon acceptance, new members complete the initiation process, including the $1,000 initiation fee and first year's annual dues of $500. You will then be formally welcomed into The Parlour.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Payment Section -->
    <section class="content-info">
        <div class="content-container">
            <h2>Initiation &amp; Dues</h2>
            <div class="content-row">
                <div class="content-col content-col-full">
                    <div class="content-details-card text-center">
                        <h3>Complete Your Membership</h3>
                        <p>Upon acceptance by the Council, your initiation fee and annual dues secure your place among San Diego's most distinguished magicians. Your investment directly supports the preservation of our library, private gathering spaces, and the continuation of our society's legacy.</p>
                        <div class="content-mt-medium">
                            <?php 
                            // Set parameters for the payment button
                            $button_text = 'View Payment Details';
                            $button_class = 'content-btn';
                            
                            // Include the payment button component
                            include_once('includes/components/paypal-button.php');
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Add divider between Contact section and Footer -->
    <div class="section-divider divider-wave"></div>
</main>

<?php
// Include site footer
include_once('includes/footer.php');

// Include chatbot component
include_once('includes/chatbot.php');

// Include scripts
include_once('includes/scripts.php');
?>
</body>
</html>
