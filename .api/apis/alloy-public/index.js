"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'alloy-public/1.0.0 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Create an account
     *
     */
    SDK.prototype.postAccounts = function (body) {
        return this.core.fetch('/accounts', 'post', body);
    };
    SDK.prototype.patchAccountsBank_account_token = function (body, metadata) {
        return this.core.fetch('/accounts/{bank_account_token}', 'patch', body, metadata);
    };
    /**
     * Retrieves a single bank account uniquely defined by a bank account token or external
     * account identifier. Bank account tokens are alphanumeric characters that start with a
     * prefix "A-". External account identifers are strings provided by services or clients.
     *
     * @summary Get a single bank account, with historical and entity data, by unique token or
     * identifier.
     */
    SDK.prototype.getBankAccountsAccount_identifier_or_token = function (metadata) {
        return this.core.fetch('/bank-accounts/{account_identifier_or_token}', 'get', metadata);
    };
    /**
     * Get Information Related to a Batch
     *
     */
    SDK.prototype.getBatchesBatch_token = function (metadata) {
        return this.core.fetch('/batches/{batch_token}', 'get', metadata);
    };
    /**
     * Retrieves the list of all cases, for the provided filter parameters
     *
     * @summary Get a list of all possible cases created using Alloy Case Management.
     */
    SDK.prototype.getCases = function () {
        return this.core.fetch('/cases', 'get');
    };
    /**
     * Retrieves a single case uniquely defined by a case token. Case tokens are alphanumeric
     * characters that start with a prefix "C-".
     *
     * @summary Get a case by a uniquely defined case token
     */
    SDK.prototype.getCasesCase_token = function (metadata) {
        return this.core.fetch('/cases/{case_token}', 'get', metadata);
    };
    /**
     * Retrieves a list of case evidences uniquely defined by a case token. Case tokens are
     * alphanumeric characters that start with a prefix "C-".
     *
     * @summary Get case evidences by case token
     */
    SDK.prototype.getCasesCase_tokenEvidences = function (metadata) {
        return this.core.fetch('/cases/{case_token}/evidences', 'get', metadata);
    };
    /**
     * Create a new manual tag and/or line item associated to an existing case
     *
     * @summary Create a case evidence
     */
    SDK.prototype.postCasesCase_tokenEvidences = function (metadata) {
        return this.core.fetch('/cases/{case_token}/evidences', 'post', metadata);
    };
    /**
     * Retrieves a list of case works defined for a given case by a case token. Case work is
     * any action an agent takes on a case. Some examples of types of work are `closure` (close
     * a case), `status` (change case status), `assignment_created` (assigning an agent), or
     * `note` (leave a note on a case). All type of case work can have a note.
     *
     *
     * @summary Get case works for a case
     */
    SDK.prototype.getCasesCase_tokenWorks = function (metadata) {
        return this.core.fetch('/cases/{case_token}/works', 'get', metadata);
    };
    /**
     * Enables an agent to take action on a single case at a time. There are nine types of
     * actions that can be taken on an individual level: `assignment_created` (assigning a user
     * to the cases), `assignment_removed` (unassigning a user to the cases), `status`
     * (changing the statuses), `closure` (closing the cases), `note` (adding a note to a
     * case), `read` (viewing a case after an update) `manual_evidence_added` (when a tag or
     * line item is manually added to a case), `case_escalation_created` (a case was
     * re-assigned and escalated), and finally `case_escalation_removed` (a case escalation was
     * removed).
     *
     *
     * @summary Create a case work (single)
     */
    SDK.prototype.postCasesCase_tokenWorks = function (metadata) {
        return this.core.fetch('/cases/{case_token}/works', 'post', metadata);
    };
    /**
     * Enables an agent to take action on multiple cases at once. There are four types of
     * actions that can be taken on a bulk level: `assignment_created` (assigning a user to the
     * cases), `assignment_removed` (unassigning a user to the cases), `status` (changing the
     * statuses), and `closure` (closing the cases).
     *
     *
     * @summary Create a case work (multi)
     */
    SDK.prototype.postCasesMultiWorks = function () {
        return this.core.fetch('/cases/multi/works', 'post');
    };
    /**
     * When activity results in case creation through an evaluation, this will return activity
     * data that meets the tag criteria. This can include transaction data, PII updates,
     * account data, sanctions screening data, or even more.
     *
     *
     * @summary Show dataset related to a case-generating tag
     */
    SDK.prototype.getCasesCase_tokenEvidencesEvaluation_tokenAlert = function (metadata) {
        return this.core.fetch('/cases/{case_token}/evidences/{evaluation_token}/alert', 'get', metadata);
    };
    /**
     * Describe a Document Before an Entity is Created
     *
     */
    SDK.prototype.postDocuments = function (body) {
        return this.core.fetch('/documents', 'post', body);
    };
    SDK.prototype.putDocumentsDocument_token = function (body, metadata) {
        return this.core.fetch('/documents/{document_token}', 'put', body, metadata);
    };
    /**
     * The document upload API is a two-step process. First, the metadata for the document is
     * specified, and the API returns a file identifier so the file can be streamed directly to
     * the next endpoint. You’ll need to look for the document_token returned in the response
     * because that is necessary to pass to the next endpoint for streaming the file.
     *
     * @summary Describe a Document Before Uploading
     */
    SDK.prototype.postEntitiesEntity_tokenDocuments = function (body, metadata) {
        return this.core.fetch('/entities/{entity_token}/documents', 'post', body, metadata);
    };
    /**
     * All documents for an entity can be queried using this endpoint. All metadata for the
     * documents is available, but the documents themselves must be downloaded individually.
     *
     * @summary Get a List of All Documents for an Entity
     */
    SDK.prototype.getEntitiesEntity_tokenDocuments = function (metadata) {
        return this.core.fetch('/entities/{entity_token}/documents', 'get', metadata);
    };
    SDK.prototype.putEntitiesEntity_tokenDocumentsDocument_token = function (body, metadata) {
        return this.core.fetch('/entities/{entity_token}/documents/{document_token}', 'put', body, metadata);
    };
    /**
     * If you want to mark a document as “approved” or “denied” (if you have a document review
     * process), or just change the name or type of a document, you can do so with the PATCH
     * endpoint.
     *
     * @summary Update Document Metadata
     */
    SDK.prototype.patchEntitiesEntity_tokenDocumentsDocument_token = function (body, metadata) {
        return this.core.fetch('/entities/{entity_token}/documents/{document_token}', 'patch', body, metadata);
    };
    /**
     * This endpoint will return a file stream of the requested document.
     *
     * @summary Download a Document
     */
    SDK.prototype.getEntitiesEntity_tokenDocumentsDocument_token = function (metadata) {
        return this.core.fetch('/entities/{entity_token}/documents/{document_token}', 'get', metadata);
    };
    /**
     * You can add an unlimited amount of notes to a document to keep track of whatever
     * information is needed. All you need is to pass the note along with the email of the
     * author of the note (must be a user associated with your customer account) to this API
     * endpoint.
     *
     * @summary Add Notes to a Document
     */
    SDK.prototype.postEntitiesEntity_tokenDocumentsDocument_tokenNotes = function (body, metadata) {
        return this.core.fetch('/entities/{entity_token}/documents/{document_token}/notes', 'post', body, metadata);
    };
    /**
     * Get Information Related to an Entity
     *
     */
    SDK.prototype.getEntitiesEntity_token = function (metadata) {
        return this.core.fetch('/entities/{entity_token}', 'get', metadata);
    };
    /**
     * If you want to look up the result of a previously-run evaluation, you can use the API to
     * get the exact same response that was returned from POST /evaluations originally. Here is
     * the endpoint for getting that information.
     *
     * @summary Get An Evaluation
     */
    SDK.prototype.getEntitiesEntity_tokenEvaluationsEvaluation_token = function (metadata) {
        return this.core.fetch('/entities/{entity_token}/evaluations/{evaluation_token}', 'get', metadata);
    };
    /**
     * Adds a note to an existing entity.
     *
     * @summary Add a Note for an Entity
     */
    SDK.prototype.postEntitiesEntity_tokenNotes = function (body, metadata) {
        return this.core.fetch('/entities/{entity_token}/notes', 'post', body, metadata);
    };
    /**
     * Creates a person entity
     *
     * @summary Create a person entity
     * @throws FetchError<400, types.PostEntitiesPersonsResponse400> Missing required fields
     */
    SDK.prototype.postEntitiesPersons = function (body) {
        return this.core.fetch('/entities/persons', 'post', body);
    };
    /**
     * Retrieves information associated with specified person entity token
     *
     * @summary Get a person entity
     * @throws FetchError<400, types.GetEntitiesPersonsEntityTokenResponse400> Unauthorized
     */
    SDK.prototype.getEntitiesPersonsEntity_token = function (metadata) {
        return this.core.fetch('/entities/persons/{entity_token}', 'get', metadata);
    };
    SDK.prototype.patchEntitiesPersonsEntity_token = function (body, metadata) {
        return this.core.fetch('/entities/persons/{entity_token}', 'patch', body, metadata);
    };
    /**
     * Creates a business entity
     *
     * @summary Create a business entity
     * @throws FetchError<400, types.PostEntitiesBusinessesResponse400> Missing required fields
     */
    SDK.prototype.postEntitiesBusinesses = function (body) {
        return this.core.fetch('/entities/businesses', 'post', body);
    };
    /**
     * Retrieves information associated with specified business entity token
     *
     * @summary Get a business entity
     * @throws FetchError<400, types.GetEntitiesBusinessesEntityTokenResponse400> Unauthorized
     */
    SDK.prototype.getEntitiesBusinessesEntity_token = function (metadata) {
        return this.core.fetch('/entities/businesses/{entity_token}', 'get', metadata);
    };
    SDK.prototype.patchEntitiesBusinessesEntity_token = function (body, metadata) {
        return this.core.fetch('/entities/businesses/{entity_token}', 'patch', body, metadata);
    };
    /**
     * Merge the properties of the secondary entity into the primary entity. Required - one of
     * (primary_entity_token / primary_external_entity_id) and one of (secondary_entity_token
     * and secondary_external_entity_id).
     *
     * @summary Merge two entities
     */
    SDK.prototype.postEntitiesMerge = function (body) {
        return this.core.fetch('/entities/merge', 'post', body);
    };
    /**
     * Insert a list of entity feedback while leaving the rest of the existing entity feedback
     * intact
     *
     * @summary Append entity feedback
     */
    SDK.prototype.postEntityFeedback = function (body) {
        return this.core.fetch('/entity-feedback', 'post', body);
    };
    /**
     * Get a list of entity feedback
     *
     * @summary Get entity feedback
     */
    SDK.prototype.getEntityFeedback = function () {
        return this.core.fetch('/entity-feedback', 'get');
    };
    /**
     * Given a workflow specified by the Authorization header, the API will run an evaluation
     * with the provided payload. Alloy's API is dynamic, and thus the input parameters vary
     * depending on which services are run and how the workflow is configured.
     *
     *
     * @summary Runs an evaluation
     */
    SDK.prototype.postEvaluations = function (body, metadata) {
        return this.core.fetch('/evaluations', 'post', body, metadata);
    };
    /**
     * Given a workflow specified by the Authorization header, the API returns a list of
     * required and optional inputs for running an evaluation through the designated workflow.
     * Alloy's API is dynamic, and thus the input parameters vary depending on which services
     * are run and how the workflow is configured. Hitting the `GET /parameters` endpoint will
     * show exactly what your initial `POST /evaluations` request to the Alloy API should look
     * like. All attributes will either be always required, conditionally required, or
     * optional. For instance, in the example here, you either have to pass `document_ssn` OR
     * both `document_license` and `document_license_state`. Note that this response body is
     * just an example, and the exact parameters of your workflow version will vary.
     *
     *
     * @summary Returns a list of required and optional inputs
     */
    SDK.prototype.getParameters = function () {
        return this.core.fetch('/parameters', 'get');
    };
    /**
     * View Evaluation
     *
     */
    SDK.prototype.getEvaluationsEvaluation_token = function (metadata) {
        return this.core.fetch('/evaluations/{evaluation_token}', 'get', metadata);
    };
    /**
     * Updates an existing unresolved evaluation (waiting on required inputs), data supplied in
     * the request body will be merged with data supplied from the initial `POST` request.
     * Note that `null` values supplied for fields in the request body are treated as "do no
     * change" and no updates will happen with those fields.
     *
     *
     * @summary Updates an evaluation
     */
    SDK.prototype.patchEvaluationsEvaluation_token = function (body, metadata) {
        return this.core.fetch('/evaluations/{evaluation_token}', 'patch', body, metadata);
    };
    /**
     * Create an event
     *
     * @throws FetchError<400, types.PostEventsResponse400> Validation Error
     * @throws FetchError<409, types.PostEventsResponse409> Conflict on object
     */
    SDK.prototype.postEvents = function (body) {
        return this.core.fetch('/events/', 'post', body);
    };
    /**
     * Retrieves the schema for requested event type
     *
     * @summary Get the schema for request event type
     * @throws FetchError<400, types.GetEventsSchemaResponse400> Validation Error
     */
    SDK.prototype.getEventsSchema = function (metadata) {
        return this.core.fetch('/events/schema', 'get', metadata);
    };
    /**
     * Get Information Related to a Group
     *
     */
    SDK.prototype.getGroupsEntity_token = function (metadata) {
        return this.core.fetch('/groups/{entity_token}', 'get', metadata);
    };
    /**
     * Given a workflow with a Group Service, this endpoint can evaluate a group of entities
     * with this endpoint.
     *
     * @summary Post a Group Evaluation
     */
    SDK.prototype.postGroupsGrouptokenEvaluations = function (metadata) {
        return this.core.fetch('/groups/{groupToken}/evaluations', 'post', metadata);
    };
    SDK.prototype.postGroupsGrouptokenNotes = function (body, metadata) {
        return this.core.fetch('/groups/{groupToken}/notes', 'post', body, metadata);
    };
    /**
     * Create a journey application for one or more entities.
     *
     *
     * @summary Create Journey Application
     * @throws FetchError<400, types.PostJourneysJourneyTokenApplicationsResponse400> Request Body Failure
     * @throws FetchError<401, types.PostJourneysJourneyTokenApplicationsResponse401> Authentication Failure
     * @throws FetchError<404, types.PostJourneysJourneyTokenApplicationsResponse404> Not Found
     * @throws FetchError<409, types.PostJourneysJourneyTokenApplicationsResponse409> Resource Conflict
     * @throws FetchError<500, types.PostJourneysJourneyTokenApplicationsResponse500> Unhandled Service Error
     * @throws FetchError<503, types.PostJourneysJourneyTokenApplicationsResponse503> Temporarily Offline for Maintenance
     */
    SDK.prototype.postJourneysJourney_tokenApplications = function (body, metadata) {
        return this.core.fetch('/journeys/{journey_token}/applications', 'post', body, metadata);
    };
    /**
     * This endpoint retrieves the latest (i.e. most recently created) Application associated
     * with the supplied External Application ID.
     * If the `journeyToken` query parameter is provided, the retrieved Application will be the
     * latest Application associated with that particular Journey and the External Application
     * ID.
     *
     *
     * @summary Get latest Journey Application by External Application ID
     * @throws FetchError<401, types.GetJourneysApplicationsExtExternalApplicationIdLatestResponse401> Unauthorize
     * @throws FetchError<404, types.GetJourneysApplicationsExtExternalApplicationIdLatestResponse404> Not Found
     * @throws FetchError<500, types.GetJourneysApplicationsExtExternalApplicationIdLatestResponse500> Unhandled Service Error
     * @throws FetchError<503, types.GetJourneysApplicationsExtExternalApplicationIdLatestResponse503> Temporarily Offline for Maintenance
     */
    SDK.prototype.getJourneysApplicationsExtExternal_application_idLatest = function (metadata) {
        return this.core.fetch('/journeys/applications/ext/{external_application_id}/latest', 'get', metadata);
    };
    SDK.prototype.putJourneysApplicationsExtExternal_application_idLatest = function (body, metadata) {
        return this.core.fetch('/journeys/applications/ext/{external_application_id}/latest', 'put', body, metadata);
    };
    SDK.prototype.postJourneysJourney_tokenApplicationsJourney_application_tokenRerun = function (body, metadata) {
        return this.core.fetch('/journeys/{journey_token}/applications/{journey_application_token}/rerun', 'post', body, metadata);
    };
    SDK.prototype.postJourneysApplicationsExtExternal_application_idLatestRerun = function (body, metadata) {
        return this.core.fetch('/journeys/applications/ext/{external_application_id}/latest/rerun', 'post', body, metadata);
    };
    SDK.prototype.putJourneysJourney_tokenApplicationsJourney_application_token = function (body, metadata) {
        return this.core.fetch('/journeys/{journey_token}/applications/{journey_application_token}', 'put', body, metadata);
    };
    /**
     * Returns relevant data associated with a journey application.
     *
     *
     * @summary Get Journey Application
     * @throws FetchError<400, types.GetJourneysJourneyTokenApplicationsJourneyApplicationTokenResponse400> Request Body Failure
     * @throws FetchError<401, types.GetJourneysJourneyTokenApplicationsJourneyApplicationTokenResponse401> Authentication Failure
     * @throws FetchError<404, types.GetJourneysJourneyTokenApplicationsJourneyApplicationTokenResponse404> Not Found
     * @throws FetchError<500, types.GetJourneysJourneyTokenApplicationsJourneyApplicationTokenResponse500> Unhandled Service Error
     * @throws FetchError<503, types.GetJourneysJourneyTokenApplicationsJourneyApplicationTokenResponse503> Temporarily Offline for Maintenance
     */
    SDK.prototype.getJourneysJourney_tokenApplicationsJourney_application_token = function (metadata) {
        return this.core.fetch('/journeys/{journey_token}/applications/{journey_application_token}', 'get', metadata);
    };
    /**
     * If an entity application has the status `pending_action`, this endpoint must be used to
     * inform the system of the outcome of the action and advance the application accordingly.
     *
     * For multi-entity applications, the entity application must be identified by sending
     * either `entity_application_token`, `entity_token`, or `external_entity_id`. See those
     * parameters' descriptions for more detail.
     *
     * If the action has been configured to expire, the system checks if an action has expired
     * every 12 hours from the time the application visits the action node. The system also
     * checks for expiration if a request to this endpoint is made, and the application will
     * advance according to the journey configuration if the action node has expired.
     *
     * Additional data can also be optionally sent to the subsequent nodes in order to update
     * the application.
     *
     *
     * @summary Update Journey Application Action Node
     */
    SDK.prototype.putJourneysJourney_tokenApplicationsJourney_application_tokenNodesNode_id = function (body, metadata) {
        return this.core.fetch('/journeys/{journey_token}/applications/{journey_application_token}/nodes/{node_id}', 'put', body, metadata);
    };
    SDK.prototype.postJourneysJourney_tokenApplicationsJourney_application_tokenCasesCase_tokenReview = function (body, metadata) {
        return this.core.fetch('/journeys/{journey_token}/applications/{journey_application_token}/cases/{case_token}/review', 'post', body, metadata);
    };
    SDK.prototype.postJourneysJourney_tokenApplicationsJourney_application_tokenReview = function (body, metadata) {
        return this.core.fetch('/journeys/{journey_token}/applications/{journey_application_token}/review', 'post', body, metadata);
    };
    /**
     * This endpoint retrieves the required and optional parameters for all workflow nodes in
     * the given Journey.
     * The parameters will be aggregated and segmented by branch and then by workflow. Any
     * workflow that exists more than
     * once within a branch will be deduplicated in the response for that branch.
     *
     *
     * @summary Get Journey Parameters
     */
    SDK.prototype.getJourneysJourney_tokenParameters = function (metadata) {
        return this.core.fetch('/journeys/{journey_token}/parameters', 'get', metadata);
    };
    /**
     * Create a batch of journey applications by passing in a list of entities, grouped into
     * different applications
     * by the multi_entity_application_batch_key that can be optionally supplied for each
     * entity
     *
     *
     * @summary Create Journey Application Batch
     */
    SDK.prototype.postJourneysJourney_tokenBatches = function (body, metadata) {
        return this.core.fetch('/journeys/{journey_token}/batches', 'post', body, metadata);
    };
    /**
     * Get details about a specific journey application batch.
     *
     * @summary Get Journey Application Batch Summary
     */
    SDK.prototype.getJourneysJourney_tokenBatchesJourney_batch_token = function (metadata) {
        return this.core.fetch('/journeys/{journey_token}/batches/{journey_batch_token}', 'get', metadata);
    };
    /**
     * Get list of journey applications for specified batch.
     *
     * @summary Get Batch Journey Applications
     */
    SDK.prototype.getJourneysJourney_tokenBatchesJourney_batch_tokenApplications = function (metadata) {
        return this.core.fetch('/journeys/{journey_token}/batches/{journey_batch_token}/applications', 'get', metadata);
    };
    /**
     * Create a note associated with the specified Journey Application
     *
     * @summary Create Journey Application Note
     */
    SDK.prototype.postJourneysJourney_tokenApplicationsJourney_application_tokenNotes = function (body, metadata) {
        return this.core.fetch('/journeys/{journey_token}/applications/{journey_application_token}/notes', 'post', body, metadata);
    };
    /**
     * Retrieve all notes associated with the specified Journey Application
     *
     * @summary Get Journey Application Notes
     */
    SDK.prototype.getJourneysJourney_tokenApplicationsJourney_application_tokenNotes = function (metadata) {
        return this.core.fetch('/journeys/{journey_token}/applications/{journey_application_token}/notes', 'get', metadata);
    };
    /**
     * Returns the set of all Lists for your account
     *
     * @summary Get all Lists
     */
    SDK.prototype.getLists = function () {
        return this.core.fetch('/lists', 'get');
    };
    /**
     * Create a new list with input metadata
     *
     * @summary Create a new list
     * @throws FetchError<403, types.PostListsResponse403> New list not allowed
     * @throws FetchError<409, types.PostListsResponse409> List name exists
     */
    SDK.prototype.postLists = function (body) {
        return this.core.fetch('/lists', 'post', body);
    };
    SDK.prototype.putListsList_tokenMeta = function (body, metadata) {
        return this.core.fetch('/lists/{list_token}/meta', 'put', body, metadata);
    };
    /**
     * Return all entities belonging to the specified List
     *
     * @summary Get one List's entities
     */
    SDK.prototype.getListsList_token = function (metadata) {
        return this.core.fetch('/lists/{list_token}', 'get', metadata);
    };
    SDK.prototype.postListsList_token = function (body, metadata) {
        return this.core.fetch('/lists/{list_token}', 'post', body, metadata);
    };
    SDK.prototype.putListsList_token = function (body, metadata) {
        return this.core.fetch('/lists/{list_token}', 'put', body, metadata);
    };
    /**
     * Application token and application secret MUST be provided, either as properties in the
     * JSON body, or in the Authorization header.
     *
     * The returned bearer token will allow the client all the same access permissions as the
     * given application token and secret. Bearer tokens are sent in the `Authorization` header
     * in the form `Bearer <bearer_token>`.
     *
     * All bearer tokens expire one hour from generation.
     *
     *
     * @summary Generate a new OAuth bearer token from the given client credentials.
     * @throws FetchError<400, types.PostOauthBearerResponse400> Bad Request
     * @throws FetchError<401, types.PostOauthBearerResponse401> Authorization failed / invalid credentials.
     */
    SDK.prototype.postOauthBearer = function (body, metadata) {
        return this.core.fetch('/oauth/bearer', 'post', body, metadata);
    };
    /**
     * Check if a given bearer token is valid and unexpired.
     * **Note that** the bearer token MUST be sent in the JSON body; it CANNOT be sent as an
     * Authorization header.
     *
     *
     * @summary Validate a bearer token.
     * @throws FetchError<400, types.PostOauthValidateResponse400> Bad Request
     * @throws FetchError<401, types.PostOauthValidateResponse401> Invalid or expired bearer token.
     */
    SDK.prototype.postOauthValidate = function (body) {
        return this.core.fetch('/oauth/validate', 'post', body);
    };
    /**
     * Given a portfolio workflow specified by the Authorization header, the API will run a
     * portfolio evaluation.
     *
     *
     * @summary Runs a portfolio evaluation
     */
    SDK.prototype.postPortfolioEvaluations = function (body, metadata) {
        return this.core.fetch('/portfolio-evaluations', 'post', body, metadata);
    };
    /**
     * List Published Attributes
     *
     */
    SDK.prototype.getPublishedAttributes = function () {
        return this.core.fetch('/published-attributes', 'get');
    };
    /**
     * Create Published Attribute
     *
     * @throws FetchError<400, types.PostPublishedAttributesResponse400> There was a validation error when creating the published attribute.
     */
    SDK.prototype.postPublishedAttributes = function (body) {
        return this.core.fetch('/published-attributes', 'post', body);
    };
    /**
     * Get Published Attribute
     *
     * @throws FetchError<404, types.GetPublishedAttributesPublishedAttributeTokenResponse404> Unable to find the published attribute token.
     */
    SDK.prototype.getPublishedAttributesPublishedAttributeToken = function (metadata) {
        return this.core.fetch('/published-attributes/{published-attribute-token}', 'get', metadata);
    };
    /**
     * Update Published Attribute
     *
     * @throws FetchError<404, types.PatchPublishedAttributesPublishedAttributeTokenResponse404> Unable to find the published attribute token.
     */
    SDK.prototype.patchPublishedAttributesPublishedAttributeToken = function (body, metadata) {
        return this.core.fetch('/published-attributes/{published-attribute-token}', 'patch', body, metadata);
    };
    /**
     * Get Published Attribute Values for an Entity
     *
     * @throws FetchError<400, types.GetPublishedAttributesPublishedAttributeTokenValuesResponse400> Must provide valid header (`alloy-entity-token` or `alloy-external-entity-id`)
     * @throws FetchError<404, types.GetPublishedAttributesPublishedAttributeTokenValuesResponse404> Unable to find published attribute with specified token
     */
    SDK.prototype.getPublishedAttributesPublishedAttributeTokenValues = function (metadata) {
        return this.core.fetch('/published-attributes/{published-attribute-token}/values', 'get', metadata);
    };
    /**
     * Create Published Attribute Values
     *
     * @throws FetchError<404, types.PostPublishedAttributesPublishedAttributeTokenValuesResponse404> Unable to find published attribute with specified token
     */
    SDK.prototype.postPublishedAttributesPublishedAttributeTokenValues = function (body, metadata) {
        return this.core.fetch('/published-attributes/{published-attribute-token}/values', 'post', body, metadata);
    };
    /**
     * Retrieve a Review
     *
     */
    SDK.prototype.getEntitiesEntity_tokenReviewsReview_token = function (metadata) {
        return this.core.fetch('/entities/{entity_token}/reviews/{review_token}', 'get', metadata);
    };
    /**
     * Add a Note to a Review.
     *
     */
    SDK.prototype.postEntitiesEntity_tokenReviewsReview_tokenNotes = function (body, metadata) {
        return this.core.fetch('/entities/{entity_token}/reviews/{review_token}/notes', 'post', body, metadata);
    };
    /**
     * Retrieve All Reviews for an Entity
     *
     */
    SDK.prototype.getEntitiesEntity_tokenReviews = function (metadata) {
        return this.core.fetch('/entities/{entity_token}/reviews', 'get', metadata);
    };
    /**
     * When an evaluation is assigned a “Manual Review” outcome, it goes to the Review Queue.
     * While evaluations can be managed in the dashboard, it is also possible to change a
     * status via API.
     *
     * This endpoint can only be used for non-Journey evaluations. To review Journey or Entity
     * applications, see the Journeys section.
     *
     * **A few things to note:**
     *   * The agent whose email you include in the body of the request must be an agent on the
     * account (View agents on the account via the main page of your account under "Agents").
     *   * The chosen outcome for the evaluation, as well as the reason given for that outcome
     * in the body of the API request, must perfectly match those set up in Settings --> Review
     * Reasons.
     *
     *
     * @summary Create a Review for an Entity
     */
    SDK.prototype.postEntitiesEntity_tokenReviews = function (body, metadata) {
        return this.core.fetch('/entities/{entity_token}/reviews', 'post', body, metadata);
    };
    /**
     * Create a Review for a Group.
     *
     */
    SDK.prototype.postGroupsGroup_tokenReviews = function (body, metadata) {
        return this.core.fetch('/groups/{group_token}/reviews', 'post', body, metadata);
    };
    /**
     * Add a Note to a Review Group.
     *
     */
    SDK.prototype.postGroupsGroup_tokenReviewsReview_tokenNotes = function (body, metadata) {
        return this.core.fetch('/groups/{group_token}/reviews/{review_token}/notes', 'post', body, metadata);
    };
    /**
     * Retrieves a Transaction by external transaction ID.
     *
     * @summary Get a transaction.
     */
    SDK.prototype.getTransactionsTransaction_id = function (metadata) {
        return this.core.fetch('/transactions/{transaction_id}', 'get', metadata);
    };
    SDK.prototype.patchTransactionsTransaction_id = function (body, metadata) {
        return this.core.fetch('/transactions/{transaction_id}', 'patch', body, metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
