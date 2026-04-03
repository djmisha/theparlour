<footer>
    <div class="container">
        <div class="footer-content">
            <div class="footer-sections">
                <div class="footer-info">
                    <h3>The Parlour</h3>
                    <p>San Diego's Exclusive Society of Magic</p>
                    <p>An Invitation-Only Collective of Master Conjurers</p>
                    <p class="footer-motto"><em>"Where the impossible becomes art."</em></p>
                </div>
                
                <div class="footer-nav-section">
                    <h3>The Inner Circle</h3>
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="about.php">The Society</a></li>
                        <li><a href="meetings.php">Gatherings &amp; Events</a></li>
                        <li><a href="membership.php">Membership</a></li>
                        <li><a href="contact.php">Request an Invitation</a></li>
                    </ul>
                </div>
                
                <div class="footer-nav-section">
                    <h3>The Archives</h3>
                    <ul>
                        <li><a href="board.php">The Council</a></li>
                        <li><a href="hall-of-fame.php">Hall of Masters</a></li>
                        <li><a href="newsletter.php">Dispatches</a></li>
                        <li><a href="donate.php">Patronage</a></li>
                      </ul>
                    </div>
                    
                    <div class="footer-nav-section">
                      <h3>The Séance Room</h3>
                      <ul>
                        <li><a href="links.php">Curated Resources</a></li>
                        <li><a href="#" class="do-magic" id="flip-trick">Conjure a Miracle</a></li>
                        <li><span class="tell-secret" id="secret-trick">Reveal the Method</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; <?php echo getCopyrightYears(2025); ?> The Parlour — San Diego's Exclusive Society of Magic. All rights reserved.</p>
            <div class="back-to-top"><br >
                <a href="#" id="back-to-top-btn">↑ Ascend</a>
            </div>
        </div>
    </div>
</footer>

<?php
/**
 * Function to display copyright years from start year to current year
 * @param int $startYear Starting year for copyright
 * @return string Formatted copyright year string
 */
function getCopyrightYears($startYear) {
    $currentYear = date('Y');
    if ($startYear == $currentYear || $startYear > $currentYear) {
        return $currentYear;
    }
    return $startYear . ' - ' . $currentYear . ' ';
}
?>
