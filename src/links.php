<?php
// Include database connection
include_once('utils/db-connect.php');

// Get type of links to display, if specified in URL
$type = isset($_GET['type']) ? $_GET['type'] : "";

// Helper function equivalent to the original mysqlJ_result function but for PDO
function pdoJ_result($stmt, $row, $field=0) {
    $stmt->execute();
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if (isset($data[$row])) {
        if (is_string($field)) {
            return isset($data[$row][$field]) ? $data[$row][$field] : null;
        } else {
            $keys = array_keys($data[$row]);
            return isset($data[$row][$keys[$field]]) ? $data[$row][$keys[$field]] : null;
        }
    }
    return null;
}

// Function to get all link types from database
function getLinkTypes($pdo) {
    $query = "SELECT DISTINCT Type FROM Links ORDER BY Type";
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Function to get all links or links of specific type
function getLinks($pdo, $type = "") {
    if (!empty($type)) {
        $query = "SELECT * FROM Links WHERE Type = :type ORDER BY Name";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':type', $type);
    } else {
        $query = "SELECT * FROM Links ORDER BY Name";
        $stmt = $pdo->prepare($query);
    }
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Function to get friendly name for link type
function getTypeFriendlyName($type) {
    $names = [
        'Mfg' => 'Manufacturers',
        'Vendor' => 'Vendors',
        'Magician' => 'Magicians',
        'Resource' => 'Resources',
        'Org' => 'Organizations',
        'Other' => 'Other Links'
    ];
    
    return isset($names[$type]) ? $names[$type] : $type;
}

// Function to group links by first letter
function groupLinksByFirstLetter($links) {
    $grouped = [];
    
    foreach ($links as $link) {
        if (!isset($link['Name']) || empty($link['Name'])) {
            continue; // Skip links with no name
        }
        
        $letter = strtoupper(substr($link['Name'], 0, 1));
        if (!isset($grouped[$letter])) {
            $grouped[$letter] = [];
        }
        
        $grouped[$letter][] = $link;
    }
    
    // Sort by letter
    ksort($grouped);
    
    // Now sort links inside each letter group
    foreach ($grouped as $letter => $letterLinks) {
        usort($letterLinks, function($a, $b) {
            return strcasecmp($a['Name'], $b['Name']);
        });
        $grouped[$letter] = $letterLinks;
    }
    
    return $grouped;
}

// Get all link types for navigation
$linkTypes = getLinkTypes($pdo);

// Sort the link types alphabetically by their display names
usort($linkTypes, function($a, $b) {
    $nameA = getTypeFriendlyName($a['Type']);
    $nameB = getTypeFriendlyName($b['Type']);
    return strcasecmp($nameA, $nameB);
});

// Get all links
$allLinks = getLinks($pdo);

// Group all links by first letter
$groupedAllLinks = groupLinksByFirstLetter($allLinks);

// Create grouped links by type for quick access
$linksByType = [];
foreach ($linkTypes as $typeRow) {
    $linkType = $typeRow['Type'];
    $typeLinks = array_filter($allLinks, function($link) use ($linkType) {
        return $link['Type'] === $linkType;
    });
    $linksByType[$linkType] = groupLinksByFirstLetter($typeLinks);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curated Resources | The Parlour — San Diego's Exclusive Magic Society</title>
    <meta name="description" content="A carefully selected collection of magical knowledge — resources, organizations, and purveyors curated by The Parlour, San Diego's exclusive magic society.">
    <meta name="keywords" content="San Diego magic, San Diego magicians, exclusive magic club, private magic society, magic show San Diego, magic resources, magic organizations">
    <meta name="author" content="The Parlour — San Diego's Exclusive Society of Magic">
    <meta property="og:title" content="Curated Resources | The Parlour — San Diego's Exclusive Magic Society">
    <meta property="og:description" content="A carefully selected collection of magical knowledge — resources, organizations, and purveyors curated by The Parlour, San Diego's exclusive magic society.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://ring76.com/links">

    <?php include_once('includes/styles.php'); ?>
</head>
<body>

<?php
// Include site header with navigation
include_once('includes/header.php');
?>

<main>
    <!-- Hero Section -->
    <section class="hero-section content-hero content-hero-links">
        <div class="content-container">
            <h1 class="links-page-title">Curated Resources</h1>
            <p class="lead">A carefully selected collection of magical knowledge</p>
        </div>
    </section>

    <!-- Introduction Section -->
    <section class="content-info">
        <div class="content-container">
            <h2 class="links-page-title">Explore the World of Magic</h2>
            <div class="content-row">
                <div class="content-col content-col-full">
                    <div class="content-details-card">
                        <p>Welcome to our curated collection of distinguished magical resources. The Parlour has assembled this compendium to serve practitioners at every stage of their journey. Please note that The Parlour does not endorse any specific products or services offered by these external sites.</p>
                        <p>If you wish to suggest a worthy addition or report a broken link, please <a href="/contact.php">contact us</a>.</p>
                        <p><em>Links open in a new tab for your convenience.</em></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Links Navigation -->
    <nav id="link-filter-nav" class="award-navigation">
        <div class="content-container">
            <ul id="link-filter">
                <li><a href="#links-display" data-type="all" class="active">All Links</a></li>
                <?php
                foreach ($linkTypes as $typeRow) {
                    $linkType = $typeRow['Type'];
                    $typeName = getTypeFriendlyName($linkType);
                    echo '<li><a href="#links-display" data-type="' . $linkType . '">' . $typeName . '</a></li>';
                }
                ?>
            </ul>
        </div>
    </nav>

    <!-- Links Section -->
    <section id="links-container" class="content-info">
        <div class="content-container">
            <h2 id="links-heading" class="links-page-title">All Links</h2>
            <div class="content-row">
                <div class="content-col content-col-full">
                    <div class="content-details-card links-card">
                        <div id="links-display">
                            <!-- All Links (Pre-rendered but hidden) -->
                            <div id="links-all" class="links-category active">
                                <?php foreach ($groupedAllLinks as $letter => $letterLinks) : ?>
                                    <h3 class="links-letter-group"><?php echo htmlspecialchars($letter); ?></h3>
                                    <ul class="links-list">
                                        <?php foreach ($letterLinks as $link) : ?>
                                            <?php 
                                            $url = !empty($link['LinkURL']) ? trim($link['LinkURL']) : '#';
                                            $name = !empty($link['Name']) ? $link['Name'] : 'Unnamed Link';
                                            $description = !empty($link['Description']) ? ' - ' . $link['Description'] : '';
                                            ?>
                                            <li>
                                                <a href="<?php echo htmlspecialchars($url); ?>" class="external-link" target="_blank" rel="noopener noreferrer"><?php echo htmlspecialchars($name); ?></a><?php echo htmlspecialchars($description); ?>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                <?php endforeach; ?>
                            </div>
                            
                            <!-- Type-specific Links (Pre-rendered but hidden) -->
                            <?php foreach ($linksByType as $linkType => $groupedLinks) : ?>
                                <div id="links-<?php echo htmlspecialchars($linkType); ?>" class="links-category" style="display: none;">
                                    <?php if (empty($groupedLinks)) : ?>
                                        <p>No links found for this category.</p>
                                    <?php else : ?>
                                        <?php foreach ($groupedLinks as $letter => $letterLinks) : ?>
                                            <h3 class="links-letter-group"><?php echo htmlspecialchars($letter); ?></h3>
                                            <ul class="links-list">
                                                <?php foreach ($letterLinks as $link) : ?>
                                                    <?php 
                                                    $url = !empty($link['LinkURL']) ? trim($link['LinkURL']) : '#';
                                                    $name = !empty($link['Name']) ? $link['Name'] : 'Unnamed Link';
                                                    $description = !empty($link['Description']) ? ' - ' . $link['Description'] : '';
                                                    ?>
                                                    <li>
                                                        <a href="<?php echo htmlspecialchars($url); ?>" class="external-link" target="_blank" rel="noopener noreferrer"><?php echo htmlspecialchars($name); ?></a><?php echo htmlspecialchars($description); ?>
                                                    </li>
                                                <?php endforeach; ?>
                                            </ul>
                                        <?php endforeach; ?>
                                    <?php endif; ?>
                                </div>
                            <?php endforeach; ?>
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
