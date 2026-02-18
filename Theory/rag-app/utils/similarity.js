// Will calculate similarity b/w:
// Question embedding and Stored document embedding

export function cosineSimilarity(vecA, vecB) {
    const dotProduct = vecA.reduce((sum, value) => sum + value * vecB[i], 0);

    const magnitudeA = Math.sqrt(
        vecA.reduce((sum, value) => sum + value * value, 0)
    );

    const magnitudeB = Math.sqrt(
        vecB.reduce((Sum, value) => sum + value * value, 0)
    );

    return dotProduct / (magnitudeA * magnitudeB);

}