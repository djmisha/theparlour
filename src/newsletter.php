<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dispatches Archive | The Parlour — San Diego's Exclusive Magic Society</title>
    <meta name="description" content="Browse the archived Dispatches from The Parlour, San Diego's most exclusive private magic society. Chronicles of the art, preserved for our members.">
    <meta name="keywords" content="San Diego magic, San Diego magicians, exclusive magic club, private magic society, magic show San Diego, magic dispatches, magic archives">
    <meta name="author" content="The Parlour — San Diego's Exclusive Society of Magic">
    <meta property="og:title" content="Dispatches Archive | The Parlour — San Diego's Exclusive Magic Society">
    <meta property="og:description" content="Browse the archived Dispatches from The Parlour, San Diego's most exclusive private magic society. Chronicles of the art, preserved for our members.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://ring76.com/newsletter">

    <?php include_once('includes/styles.php'); ?>
</head>
<body>

<?php
// Include site header with navigation
include_once('includes/header.php');
?>

<main>
    <!-- Hero Section -->
    <section class="hero-section content-hero content-hero-newsletter">
        <div class="content-container">
            <h1>Dispatches Archive</h1>
            <p class="lead">Chronicles of the art, preserved for our members</p>
        </div>
    </section>

    <!-- Introduction Section -->
    <section class="content-info">
        <div class="content-container">
            <h2>Our Monthly Dispatches</h2>
            <div class="content-row">
                <div class="content-col content-col-full">
                    <div class="content-details-card">
                        <h3>A Living Record of the Art</h3>
                        <p>The Parlour has maintained a tradition of publishing monthly Dispatches — elegant communications that chronicle our gatherings, preserve arcane knowledge, and document the evolution of our society. Each issue contains meeting recaps, member profiles, technique studies, and forthcoming engagements.</p>
                        <p>Explore our extensive archive below and trace the rich lineage of The Parlour through decades of dedication to the magical arts.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Dispatches Archive Navigation and Content -->
    <section class="content-info newsletter-archive">
        <div class="content-container">
            <h2>Dispatches Archive</h2>
            <div class="content-row">
                <div class="content-col content-col-full">
                    <div class="content-details-card">
                        <?php
                        define("NUMBUTTON", "6");    // Number of year buttons to display
                        define("NUMPERROW", "3");    // Number of year buttons per row
                        define("FIRSTYEAR", "1988"); // The first possible newsletter year.
                        
                        // Get the parameters passed in with the page.
                        $year = isset($_GET['year']) ? $_GET["year"] : 0;
                        
                        // Validate Input
                        $thisyear = getdate()["year"];
                        if ($year < FIRSTYEAR || $year > $thisyear) {
                            $year = $thisyear;
                        }
                        
                        // Figure out which band of years to show on the page.
                        $startyear = $thisyear;
                        while ($startyear >= $year) {
                            $startyear = $startyear - NUMBUTTON;
                        }
                        $startyear += 1;
                        ?>
                        
                        <!-- Year Navigation -->
                        <div class="year-navigation">
                            <div class="year-buttons">
                                <?php
                                if ($startyear < (FIRSTYEAR)) $startyear = FIRSTYEAR;
                                
                                if ($startyear > (FIRSTYEAR)) {
                                    $temp = $startyear - 1;
                                    echo '<a href="newsletter.php?year=' . $temp . '" class="nav-btn prev-btn">Previous</a>';
                                }
                                
                                for ($i = 0; $i < NUMBUTTON; $i++) {
                                    $cur_year = $startyear + $i;
                                    if ($cur_year <= $thisyear) {
                                        $activeClass = ($cur_year == $year) ? ' active' : '';
                                        echo '<a href="newsletter.php?year=' . $cur_year . '" class="year-button' . $activeClass . '">' . $cur_year . '</a>';
                                        
                                        if (($i % NUMPERROW) == (NUMPERROW - 1)) {
                                            if ($i < NUMBUTTON - 1) echo '<br>';  // New line
                                        }
                                    }
                                }
                                
                                if ($startyear + NUMBUTTON < $thisyear) {
                                    $temp = $startyear + NUMBUTTON;
                                    echo '<a href="newsletter.php?year=' . $temp . '" class="nav-btn next-btn">Next</a>';
                                }
                                ?>
                            </div>
                        </div>
                        
                        <!-- Current Year Dispatches Display -->
                        <h3><?php echo $year; ?> Dispatches</h3>
                        
                        <div class="newsletter-grid">
                            <?php
                            $i = 1;
                            $foundNewsletters = false;
                            
                            while ($i <= 12) {
                                // Check if newsletters exist for each month
                                $monthstr = sprintf('%02d', $i);
                                $yearstr = sprintf('%04d', $year);
                                
                                $filename = '../newsletters/magicurrents_' . $yearstr . '-' . $monthstr . '.pdf';
                                if (file_exists($filename)) {
                                    $foundNewsletters = true;
                                    $ts = mktime(0, 0, 0, $i, 15);
                                    $monthname = date('F', $ts);
                                    echo '<a href="' . $filename . '" target="_blank" class="newsletter-item">' . $monthname . ' ' . $year . '</a>';
                                }
                                $i++;
                            }
                            
                            if (!$foundNewsletters) {
                                echo '<div class="no-newsletters-message">No dispatches are available for ' . $year . '.</div>';
                            }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Historical Note Section -->
    <section class="what-to-expect">
        <div class="content-container">
            <h2>About Our Dispatches</h2>
            <div class="content-row">
                <div class="content-col content-col-two-thirds content-offset-col">
                    <div class="expectation-list">
                        <div class="expectation-item">
                            <span class="emoji-icon">📜</span>
                            <div>
                                <h4>Historical Record</h4>
                                <p>Our Dispatches serve as the official chronicle of The Parlour, preserving the milestones and achievements of our members across the decades.</p>
                            </div>
                        </div>
                        <div class="expectation-item">
                            <span class="emoji-icon">🎩</span>
                            <div>
                                <h4>Arcane Knowledge</h4>
                                <p>Each issue contains technique studies, insights, and wisdom from distinguished practitioners, offering members a path to refine their art and broaden their repertoire.</p>
                            </div>
                        </div>
                        <div class="expectation-item">
                            <span class="emoji-icon">👥</span>
                            <div>
                                <h4>Society Connection</h4>
                                <p>Our Dispatches strengthen the bonds of our society by keeping members apprised of gatherings, celebrating accomplishments, and welcoming new initiates into the fold.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Digital Initiative Section -->
    <section class="attending-info">
        <div class="content-container">
            <h2>Digital Archive Initiative</h2>
            <div class="content-row content-align-center">
                <div class="content-col content-col-half">
                    <div class="attendance-info">
                        <div class="members">
                            <h3>Preserving Our Legacy</h3>
                            <p>We are continually working to digitize our earlier Dispatches, ensuring that the full breadth of our society's history remains accessible to current and future members.</p>
                            <p>If you possess physical copies of any Dispatches not yet in our digital archive, we invite you to share them so that we may complete this collection for posterity.</p>
                        </div>
                    </div>
                </div>
                <div class="content-col content-col-half">
                    <div class="attendance-info">
                        <div>
                            <h3>Available to Members</h3>
                            <p>We are pleased to share our Dispatches archive with all who appreciate the art and wish to explore our society's heritage.</p>
                            <p>We trust these records will inspire you to seek membership in The Parlour and experience the magic firsthand.</p>
                            <a href="/contact.php" class="content-btn content-mt-medium">Become a Member</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Add divider between Content and Footer -->
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
