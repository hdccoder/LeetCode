var findRelativeRanks = function(score) {
    let result = [];
    
    // Create a copy of the original scores and sort it in descending order
    let sortedScore = score.slice().sort((a, b) => b - a);
    
    // Map scores to their corresponding ranks
    let rankMap = {};
    let medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    for (let i = 0; i < Math.min(3, sortedScore.length); i++) {
        rankMap[sortedScore[i]] = medals[i];
    }
    for (let i = 3; i < sortedScore.length; i++) {
        rankMap[sortedScore[i]] = String(i + 1);
    }
    
    // Assign ranks to the original scores
    for (let i = 0; i < score.length; i++) {
        result.push(rankMap[score[i]]);
    }
    
    return result;
};