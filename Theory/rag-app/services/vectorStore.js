// Right now we are creating In-memory array
// Later we will replace it with Vector DB like Chroma, Pinecone

let documents = []

export function storeDocument(text, embedding) {
    documents.push({text, embedding});
}

export function getAllDocuments() {
    return documents;
}