import { v4 as uuidv4 } from 'uuid';
import { Table } from "sst/node/table";
import handler from "@daytum/core/handler";
import dynamoDb from "@daytum/core/dynamodb";

export const main = handler(async (event) => {
    let data = {
        content: "",
        attachment: "",
    };

    if (event.body != null) {
        data = JSON.parse(event.body);
    }

    const params = {
        TableName: Table.Notes.tableName,
        Item: {
            userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
            noteId: uuidv4,
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now(),
        },
    };

    await dynamoDb.put(params);

    return JSON.stringify(params.Item);
});