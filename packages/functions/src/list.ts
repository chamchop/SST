import { Table } from "sst/node/table";
import handler from "@daytum/core/handler";
import dynamoDb from "@daytum/core/dynamodb";

export const main = handler(async (event) => {
    const params = {
        TableName: Table.Notes.tableName,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
        },
    };

    const result = await dynamoDb.query(params);

    return JSON.stringify(result.Items);
})