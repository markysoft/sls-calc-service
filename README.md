# sls-calc-service
example repo for serverless build, test, and deploy.
The application reads from one queue and sends to another.
Both queues are created upon deployment.

The queue expects a json message of the format
```
{
  "amount": 100
}
```
And will add a VAT field, sending the updated message to a destination queue:
{
  "amount": 100,
  "vat": 20
}

## Build
Native NPM packages for the Lambda environment can be built using the file [docker-compose.build.yaml](docker-compose.build.yaml)
```
docker-compose -f docker-compose.build.yaml up
```
## Test
The unit and integration tests can be run using the command:

```
docker-compose run lambda-test
```

## Deploying and Deleting via Serverless Framework (SLS)

Assuming you have [aws credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/) for an account that allows you to deploy serverless functions, and the Serverless framework has been [installed] the application may be deployed via:

```
sls deploy -s <stage>
```
and deleted via
```
sls remove -s <stage>
```

where `stage` is the stage to deploy to, i.e. `dev` `production`, `pr21`. The deployment defaults to `dev` if no stage is supplied.

## Deploying and Deleting via SAM

Build the application

```
sam build
```

Deploy the application in a guided fashion, allowing you to specify the app name, etc
```
sam deploy --guided
```
This can save to a `samconfig.toml` file so future deployments can be done with the same settings via `sam deploy`

The deployment can be deleted via a `cloudformation` command, providing the stack name and region given during the guided deployment, i.e.
```
aws cloudformation delete-stack --stack-name sam-calc-service --region us-east-1
```

SAM does not delete artifacts added to S3 buckets when cloudformation deletes the stack. They need to be deleted manually.
