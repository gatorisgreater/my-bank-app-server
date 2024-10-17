import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Create an account
     *
     */
    postAccounts(body?: types.PostAccountsBodyParam): Promise<FetchResponse<201, types.PostAccountsResponse201>>;
    /**
     * Update an account
     *
     */
    patchAccountsBank_account_token(body: types.PatchAccountsBankAccountTokenBodyParam, metadata: types.PatchAccountsBankAccountTokenMetadataParam): Promise<FetchResponse<200, types.PatchAccountsBankAccountTokenResponse200>>;
    patchAccountsBank_account_token(metadata: types.PatchAccountsBankAccountTokenMetadataParam): Promise<FetchResponse<200, types.PatchAccountsBankAccountTokenResponse200>>;
    /**
     * Retrieves a single bank account uniquely defined by a bank account token or external
     * account identifier. Bank account tokens are alphanumeric characters that start with a
     * prefix "A-". External account identifers are strings provided by services or clients.
     *
     * @summary Get a single bank account, with historical and entity data, by unique token or
     * identifier.
     */
    getBankAccountsAccount_identifier_or_token(metadata: types.GetBankAccountsAccountIdentifierOrTokenMetadataParam): Promise<FetchResponse<200, types.GetBankAccountsAccountIdentifierOrTokenResponse200>>;
    /**
     * Get Information Related to a Batch
     *
     */
    getBatchesBatch_token(metadata: types.GetBatchesBatchTokenMetadataParam): Promise<FetchResponse<200, types.GetBatchesBatchTokenResponse200>>;
    /**
     * Retrieves the list of all cases, for the provided filter parameters
     *
     * @summary Get a list of all possible cases created using Alloy Case Management.
     */
    getCases(): Promise<FetchResponse<200, types.GetCasesResponse200>>;
    /**
     * Retrieves a single case uniquely defined by a case token. Case tokens are alphanumeric
     * characters that start with a prefix "C-".
     *
     * @summary Get a case by a uniquely defined case token
     */
    getCasesCase_token(metadata: types.GetCasesCaseTokenMetadataParam): Promise<FetchResponse<200, types.GetCasesCaseTokenResponse200>>;
    /**
     * Retrieves a list of case evidences uniquely defined by a case token. Case tokens are
     * alphanumeric characters that start with a prefix "C-".
     *
     * @summary Get case evidences by case token
     */
    getCasesCase_tokenEvidences(metadata: types.GetCasesCaseTokenEvidencesMetadataParam): Promise<FetchResponse<200, types.GetCasesCaseTokenEvidencesResponse200>>;
    /**
     * Create a new manual tag and/or line item associated to an existing case
     *
     * @summary Create a case evidence
     */
    postCasesCase_tokenEvidences(metadata: types.PostCasesCaseTokenEvidencesMetadataParam): Promise<FetchResponse<201, types.PostCasesCaseTokenEvidencesResponse201> | FetchResponse<206, types.PostCasesCaseTokenEvidencesResponse206>>;
    /**
     * Retrieves a list of case works defined for a given case by a case token. Case work is
     * any action an agent takes on a case. Some examples of types of work are `closure` (close
     * a case), `status` (change case status), `assignment_created` (assigning an agent), or
     * `note` (leave a note on a case). All type of case work can have a note.
     *
     *
     * @summary Get case works for a case
     */
    getCasesCase_tokenWorks(metadata: types.GetCasesCaseTokenWorksMetadataParam): Promise<FetchResponse<200, types.GetCasesCaseTokenWorksResponse200>>;
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
    postCasesCase_tokenWorks(metadata: types.PostCasesCaseTokenWorksMetadataParam): Promise<FetchResponse<201, types.PostCasesCaseTokenWorksResponse201>>;
    /**
     * Enables an agent to take action on multiple cases at once. There are four types of
     * actions that can be taken on a bulk level: `assignment_created` (assigning a user to the
     * cases), `assignment_removed` (unassigning a user to the cases), `status` (changing the
     * statuses), and `closure` (closing the cases).
     *
     *
     * @summary Create a case work (multi)
     */
    postCasesMultiWorks(): Promise<FetchResponse<201, types.PostCasesMultiWorksResponse201>>;
    /**
     * When activity results in case creation through an evaluation, this will return activity
     * data that meets the tag criteria. This can include transaction data, PII updates,
     * account data, sanctions screening data, or even more.
     *
     *
     * @summary Show dataset related to a case-generating tag
     */
    getCasesCase_tokenEvidencesEvaluation_tokenAlert(metadata: types.GetCasesCaseTokenEvidencesEvaluationTokenAlertMetadataParam): Promise<FetchResponse<200, types.GetCasesCaseTokenEvidencesEvaluationTokenAlertResponse200>>;
    /**
     * Describe a Document Before an Entity is Created
     *
     */
    postDocuments(body: types.PostDocumentsBodyParam): Promise<FetchResponse<200, types.PostDocumentsResponse200>>;
    /**
     * Now that that metadata for the file has been specified, you just need to stream the file
     * to the location we’ve allocated for it. The response should be the same as for the
     * preceding `POST` request endpoint except `uploaded` will be true.
     *
     * @summary Submit a Document File Before an Entity is Created
     */
    putDocumentsDocument_token(body: types.PutDocumentsDocumentTokenBodyParam, metadata: types.PutDocumentsDocumentTokenMetadataParam): Promise<FetchResponse<200, types.PutDocumentsDocumentTokenResponse200>>;
    putDocumentsDocument_token(metadata: types.PutDocumentsDocumentTokenMetadataParam): Promise<FetchResponse<200, types.PutDocumentsDocumentTokenResponse200>>;
    /**
     * The document upload API is a two-step process. First, the metadata for the document is
     * specified, and the API returns a file identifier so the file can be streamed directly to
     * the next endpoint. You’ll need to look for the document_token returned in the response
     * because that is necessary to pass to the next endpoint for streaming the file.
     *
     * @summary Describe a Document Before Uploading
     */
    postEntitiesEntity_tokenDocuments(body: types.PostEntitiesEntityTokenDocumentsBodyParam, metadata: types.PostEntitiesEntityTokenDocumentsMetadataParam): Promise<FetchResponse<200, types.PostEntitiesEntityTokenDocumentsResponse200>>;
    /**
     * All documents for an entity can be queried using this endpoint. All metadata for the
     * documents is available, but the documents themselves must be downloaded individually.
     *
     * @summary Get a List of All Documents for an Entity
     */
    getEntitiesEntity_tokenDocuments(metadata: types.GetEntitiesEntityTokenDocumentsMetadataParam): Promise<FetchResponse<200, types.GetEntitiesEntityTokenDocumentsResponse200>>;
    /**
     * Now that that metadata for the file has been specified, you just need to stream the file
     * to the location we’ve allocated for it. The response should be the same as for the
     * preceding `POST` request endpoint except `uploaded` will be true.
     *
     * @summary Submit a Document File for an Entity
     */
    putEntitiesEntity_tokenDocumentsDocument_token(body: types.PutEntitiesEntityTokenDocumentsDocumentTokenBodyParam, metadata: types.PutEntitiesEntityTokenDocumentsDocumentTokenMetadataParam): Promise<FetchResponse<200, types.PutEntitiesEntityTokenDocumentsDocumentTokenResponse200>>;
    putEntitiesEntity_tokenDocumentsDocument_token(metadata: types.PutEntitiesEntityTokenDocumentsDocumentTokenMetadataParam): Promise<FetchResponse<200, types.PutEntitiesEntityTokenDocumentsDocumentTokenResponse200>>;
    /**
     * If you want to mark a document as “approved” or “denied” (if you have a document review
     * process), or just change the name or type of a document, you can do so with the PATCH
     * endpoint.
     *
     * @summary Update Document Metadata
     */
    patchEntitiesEntity_tokenDocumentsDocument_token(body: types.PatchEntitiesEntityTokenDocumentsDocumentTokenBodyParam, metadata: types.PatchEntitiesEntityTokenDocumentsDocumentTokenMetadataParam): Promise<FetchResponse<200, types.PatchEntitiesEntityTokenDocumentsDocumentTokenResponse200>>;
    /**
     * This endpoint will return a file stream of the requested document.
     *
     * @summary Download a Document
     */
    getEntitiesEntity_tokenDocumentsDocument_token(metadata: types.GetEntitiesEntityTokenDocumentsDocumentTokenMetadataParam): Promise<FetchResponse<200, types.GetEntitiesEntityTokenDocumentsDocumentTokenResponse200>>;
    /**
     * You can add an unlimited amount of notes to a document to keep track of whatever
     * information is needed. All you need is to pass the note along with the email of the
     * author of the note (must be a user associated with your customer account) to this API
     * endpoint.
     *
     * @summary Add Notes to a Document
     */
    postEntitiesEntity_tokenDocumentsDocument_tokenNotes(body: types.PostEntitiesEntityTokenDocumentsDocumentTokenNotesBodyParam, metadata: types.PostEntitiesEntityTokenDocumentsDocumentTokenNotesMetadataParam): Promise<FetchResponse<200, types.PostEntitiesEntityTokenDocumentsDocumentTokenNotesResponse200>>;
    /**
     * Get Information Related to an Entity
     *
     */
    getEntitiesEntity_token(metadata: types.GetEntitiesEntityTokenMetadataParam): Promise<FetchResponse<200, types.GetEntitiesEntityTokenResponse200>>;
    /**
     * If you want to look up the result of a previously-run evaluation, you can use the API to
     * get the exact same response that was returned from POST /evaluations originally. Here is
     * the endpoint for getting that information.
     *
     * @summary Get An Evaluation
     */
    getEntitiesEntity_tokenEvaluationsEvaluation_token(metadata: types.GetEntitiesEntityTokenEvaluationsEvaluationTokenMetadataParam): Promise<FetchResponse<200, types.GetEntitiesEntityTokenEvaluationsEvaluationTokenResponse200>>;
    /**
     * Adds a note to an existing entity.
     *
     * @summary Add a Note for an Entity
     */
    postEntitiesEntity_tokenNotes(body: types.PostEntitiesEntityTokenNotesBodyParam, metadata: types.PostEntitiesEntityTokenNotesMetadataParam): Promise<FetchResponse<200, types.PostEntitiesEntityTokenNotesResponse200>>;
    /**
     * Creates a person entity
     *
     * @summary Create a person entity
     * @throws FetchError<400, types.PostEntitiesPersonsResponse400> Missing required fields
     */
    postEntitiesPersons(body?: types.PostEntitiesPersonsBodyParam): Promise<FetchResponse<201, types.PostEntitiesPersonsResponse201>>;
    /**
     * Retrieves information associated with specified person entity token
     *
     * @summary Get a person entity
     * @throws FetchError<400, types.GetEntitiesPersonsEntityTokenResponse400> Unauthorized
     */
    getEntitiesPersonsEntity_token(metadata: types.GetEntitiesPersonsEntityTokenMetadataParam): Promise<FetchResponse<200, types.GetEntitiesPersonsEntityTokenResponse200>>;
    /**
     * Using a person entity token, update entity with provided information
     *
     * @summary Update a person entity
     */
    patchEntitiesPersonsEntity_token(body: types.PatchEntitiesPersonsEntityTokenBodyParam, metadata: types.PatchEntitiesPersonsEntityTokenMetadataParam): Promise<FetchResponse<200, types.PatchEntitiesPersonsEntityTokenResponse200>>;
    patchEntitiesPersonsEntity_token(metadata: types.PatchEntitiesPersonsEntityTokenMetadataParam): Promise<FetchResponse<200, types.PatchEntitiesPersonsEntityTokenResponse200>>;
    /**
     * Creates a business entity
     *
     * @summary Create a business entity
     * @throws FetchError<400, types.PostEntitiesBusinessesResponse400> Missing required fields
     */
    postEntitiesBusinesses(body?: types.PostEntitiesBusinessesBodyParam): Promise<FetchResponse<201, types.PostEntitiesBusinessesResponse201>>;
    /**
     * Retrieves information associated with specified business entity token
     *
     * @summary Get a business entity
     * @throws FetchError<400, types.GetEntitiesBusinessesEntityTokenResponse400> Unauthorized
     */
    getEntitiesBusinessesEntity_token(metadata: types.GetEntitiesBusinessesEntityTokenMetadataParam): Promise<FetchResponse<200, types.GetEntitiesBusinessesEntityTokenResponse200>>;
    /**
     * Using a business entity token, update entity with provided information
     *
     * @summary Update a business entity
     */
    patchEntitiesBusinessesEntity_token(body: types.PatchEntitiesBusinessesEntityTokenBodyParam, metadata: types.PatchEntitiesBusinessesEntityTokenMetadataParam): Promise<FetchResponse<200, types.PatchEntitiesBusinessesEntityTokenResponse200>>;
    patchEntitiesBusinessesEntity_token(metadata: types.PatchEntitiesBusinessesEntityTokenMetadataParam): Promise<FetchResponse<200, types.PatchEntitiesBusinessesEntityTokenResponse200>>;
    /**
     * Merge the properties of the secondary entity into the primary entity. Required - one of
     * (primary_entity_token / primary_external_entity_id) and one of (secondary_entity_token
     * and secondary_external_entity_id).
     *
     * @summary Merge two entities
     */
    postEntitiesMerge(body?: types.PostEntitiesMergeBodyParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Insert a list of entity feedback while leaving the rest of the existing entity feedback
     * intact
     *
     * @summary Append entity feedback
     */
    postEntityFeedback(body?: types.PostEntityFeedbackBodyParam): Promise<FetchResponse<200, types.PostEntityFeedbackResponse200>>;
    /**
     * Get a list of entity feedback
     *
     * @summary Get entity feedback
     */
    getEntityFeedback(): Promise<FetchResponse<200, types.GetEntityFeedbackResponse200>>;
    /**
     * Given a workflow specified by the Authorization header, the API will run an evaluation
     * with the provided payload. Alloy's API is dynamic, and thus the input parameters vary
     * depending on which services are run and how the workflow is configured.
     *
     *
     * @summary Runs an evaluation
     */
    postEvaluations(body: types.PostEvaluationsBodyParam, metadata?: types.PostEvaluationsMetadataParam): Promise<FetchResponse<200, types.PostEvaluationsResponse200> | FetchResponse<201, types.PostEvaluationsResponse201>>;
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
    getParameters(): Promise<FetchResponse<200, types.GetParametersResponse200>>;
    /**
     * View Evaluation
     *
     */
    getEvaluationsEvaluation_token(metadata: types.GetEvaluationsEvaluationTokenMetadataParam): Promise<FetchResponse<201, types.GetEvaluationsEvaluationTokenResponse201>>;
    /**
     * Updates an existing unresolved evaluation (waiting on required inputs), data supplied in
     * the request body will be merged with data supplied from the initial `POST` request.
     * Note that `null` values supplied for fields in the request body are treated as "do no
     * change" and no updates will happen with those fields.
     *
     *
     * @summary Updates an evaluation
     */
    patchEvaluationsEvaluation_token(body: types.PatchEvaluationsEvaluationTokenBodyParam, metadata: types.PatchEvaluationsEvaluationTokenMetadataParam): Promise<FetchResponse<200, types.PatchEvaluationsEvaluationTokenResponse200> | FetchResponse<201, types.PatchEvaluationsEvaluationTokenResponse201>>;
    /**
     * Create an event
     *
     * @throws FetchError<400, types.PostEventsResponse400> Validation Error
     * @throws FetchError<409, types.PostEventsResponse409> Conflict on object
     */
    postEvents(body?: types.PostEventsBodyParam): Promise<FetchResponse<201, types.PostEventsResponse201>>;
    /**
     * Retrieves the schema for requested event type
     *
     * @summary Get the schema for request event type
     * @throws FetchError<400, types.GetEventsSchemaResponse400> Validation Error
     */
    getEventsSchema(metadata: types.GetEventsSchemaMetadataParam): Promise<FetchResponse<200, types.GetEventsSchemaResponse200>>;
    /**
     * Get Information Related to a Group
     *
     */
    getGroupsEntity_token(metadata: types.GetGroupsEntityTokenMetadataParam): Promise<FetchResponse<200, types.GetGroupsEntityTokenResponse200>>;
    /**
     * Given a workflow with a Group Service, this endpoint can evaluate a group of entities
     * with this endpoint.
     *
     * @summary Post a Group Evaluation
     */
    postGroupsGrouptokenEvaluations(metadata: types.PostGroupsGrouptokenEvaluationsMetadataParam): Promise<FetchResponse<200, types.PostGroupsGrouptokenEvaluationsResponse200>>;
    /**
     * Add note to a group
     *
     */
    postGroupsGrouptokenNotes(body: types.PostGroupsGrouptokenNotesBodyParam, metadata: types.PostGroupsGrouptokenNotesMetadataParam): Promise<FetchResponse<200, types.PostGroupsGrouptokenNotesResponse200>>;
    postGroupsGrouptokenNotes(metadata: types.PostGroupsGrouptokenNotesMetadataParam): Promise<FetchResponse<200, types.PostGroupsGrouptokenNotesResponse200>>;
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
    postJourneysJourney_tokenApplications(body: types.PostJourneysJourneyTokenApplicationsBodyParam, metadata: types.PostJourneysJourneyTokenApplicationsMetadataParam): Promise<FetchResponse<201, types.PostJourneysJourneyTokenApplicationsResponse201>>;
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
    getJourneysApplicationsExtExternal_application_idLatest(metadata: types.GetJourneysApplicationsExtExternalApplicationIdLatestMetadataParam): Promise<FetchResponse<200, types.GetJourneysApplicationsExtExternalApplicationIdLatestResponse200>>;
    /**
     * This endpoint allows you to update the latest (i.e. most recently created) Application
     * associated with the supplied External Application ID.
     * If the `journeyToken` query parameter is provided, the retrieved Application will be the
     * latest Application associated with that particular Journey and the External Application
     * ID.
     * The use cases for the endpoint are elaborated in the regular "Update Journey
     * Application" endpoint.
     *
     *
     * @summary Update latest Journey Application by External Application ID
     */
    putJourneysApplicationsExtExternal_application_idLatest(body: types.PutJourneysApplicationsExtExternalApplicationIdLatestBodyParam, metadata: types.PutJourneysApplicationsExtExternalApplicationIdLatestMetadataParam): Promise<FetchResponse<200, types.PutJourneysApplicationsExtExternalApplicationIdLatestResponse200>>;
    putJourneysApplicationsExtExternal_application_idLatest(metadata: types.PutJourneysApplicationsExtExternalApplicationIdLatestMetadataParam): Promise<FetchResponse<200, types.PutJourneysApplicationsExtExternalApplicationIdLatestResponse200>>;
    /**
     * This endpoint re-runs an application that has already been run through Alloy. It will be
     * run through the currently active version of the Journey, and will default to re-using
     * the same payload as the original, but does allow for the user to optionally alter that
     * original payload.
     *
     * The options for altering are the following:
     * - Edit any of the payload information for any of the entities in the application by
     * including, within an object in the `entities` array, the `entity_token` of the entity to
     * be altered. Include any number of fields to be altered. Assign a value of null for any
     * field you want to exclude.
     * - Add any number of new entities to the application by including new entity objects in
     * the payload.
     * - Delete entire entities by putting these entity tokens to be deleted into an array
     * called `exclude_entity_tokens` (at least one entity must remain).
     *
     * Any of the below headers used with the original application will also be used here. To
     * change the value of the header,
     * include the updated value with this request.
     *
     *
     * @summary Rerun Journey Application
     */
    postJourneysJourney_tokenApplicationsJourney_application_tokenRerun(body: types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenRerunBodyParam, metadata: types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenRerunMetadataParam): Promise<FetchResponse<201, types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenRerunResponse201>>;
    postJourneysJourney_tokenApplicationsJourney_application_tokenRerun(metadata: types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenRerunMetadataParam): Promise<FetchResponse<201, types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenRerunResponse201>>;
    /**
     * This endpoint reruns the latest (i.e. most recently created) Application associated with
     * the supplied External Application ID.
     * If the `journeyToken` query parameter is provided, the retrieved Application will be the
     * latest Application associated with that particular Journey and the External Application
     * ID.
     * Just as with our other rerun endpoint, this will create a new Journey Application.
     *
     *
     * @summary Rerun latest Journey Application by External Application ID
     */
    postJourneysApplicationsExtExternal_application_idLatestRerun(body: types.PostJourneysApplicationsExtExternalApplicationIdLatestRerunBodyParam, metadata: types.PostJourneysApplicationsExtExternalApplicationIdLatestRerunMetadataParam): Promise<FetchResponse<200, types.PostJourneysApplicationsExtExternalApplicationIdLatestRerunResponse200>>;
    postJourneysApplicationsExtExternal_application_idLatestRerun(metadata: types.PostJourneysApplicationsExtExternalApplicationIdLatestRerunMetadataParam): Promise<FetchResponse<200, types.PostJourneysApplicationsExtExternalApplicationIdLatestRerunResponse200>>;
    /**
     * This endpoint has 3 different use cases:
     *
     *   * Send the additional or updated data required to advance the application.
     *     * Only available if one or more entity applications have the statuses
     * `pending_documents`, `pending_step_up`, or `data_request`.
     *   * Send new, additional entities to be processed.
     *     * Only available if the parameter `do_await_additional_entities` was set to `true`
     * in the POST request to create the journey application.
     *   * Inform the system that the user has finished sending all additional entities by
     * passing the parameter `has_finished_sending_additional_entities` with value `true`.
     *     * Only available if the parameter `do_await_additional_entities` was set to `true`
     * in the POST request to create the journey application.
     *
     * Any of the headers used with the original application (ex: `alloy-sandbox`) will also be
     * used here.
     *
     *
     * @summary Update Journey Application
     */
    putJourneysJourney_tokenApplicationsJourney_application_token(body: types.PutJourneysJourneyTokenApplicationsJourneyApplicationTokenBodyParam, metadata: types.PutJourneysJourneyTokenApplicationsJourneyApplicationTokenMetadataParam): Promise<FetchResponse<200, types.PutJourneysJourneyTokenApplicationsJourneyApplicationTokenResponse200>>;
    putJourneysJourney_tokenApplicationsJourney_application_token(metadata: types.PutJourneysJourneyTokenApplicationsJourneyApplicationTokenMetadataParam): Promise<FetchResponse<200, types.PutJourneysJourneyTokenApplicationsJourneyApplicationTokenResponse200>>;
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
    getJourneysJourney_tokenApplicationsJourney_application_token(metadata: types.GetJourneysJourneyTokenApplicationsJourneyApplicationTokenMetadataParam): Promise<FetchResponse<200, types.GetJourneysJourneyTokenApplicationsJourneyApplicationTokenResponse200>>;
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
    putJourneysJourney_tokenApplicationsJourney_application_tokenNodesNode_id(body: types.PutJourneysJourneyTokenApplicationsJourneyApplicationTokenNodesNodeIdBodyParam, metadata: types.PutJourneysJourneyTokenApplicationsJourneyApplicationTokenNodesNodeIdMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * If an entity application has the status `waiting_review`, this endpoint can be used to
     * inform the system of the outcome of the manual review and submit review notes. In the
     * first request for a given case, the outcome and optionally reason and note are
     * submitted. In subsequent requests for the same case, only the note is allowed, as the
     * review is closed and no longer accepting new outcomes or reasons.
     *
     * @summary Manual Review Entity Application
     */
    postJourneysJourney_tokenApplicationsJourney_application_tokenCasesCase_tokenReview(body: types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenCasesCaseTokenReviewBodyParam, metadata: types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenCasesCaseTokenReviewMetadataParam): Promise<FetchResponse<201, types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenCasesCaseTokenReviewResponse201>>;
    postJourneysJourney_tokenApplicationsJourney_application_tokenCasesCase_tokenReview(metadata: types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenCasesCaseTokenReviewMetadataParam): Promise<FetchResponse<201, types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenCasesCaseTokenReviewResponse201>>;
    /**
     * If a journey application has the status `pending_journey_application_review`, this
     * endpoint can be used to inform the system of the outcome of the manual review and submit
     * review notes. The outcome submitted here will be the final outcome of the journey
     * application.
     *
     * @summary Manual Review Journey Application
     */
    postJourneysJourney_tokenApplicationsJourney_application_tokenReview(body: types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenReviewBodyParam, metadata: types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenReviewMetadataParam): Promise<FetchResponse<201, types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenReviewResponse201>>;
    postJourneysJourney_tokenApplicationsJourney_application_tokenReview(metadata: types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenReviewMetadataParam): Promise<FetchResponse<201, types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenReviewResponse201>>;
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
    getJourneysJourney_tokenParameters(metadata: types.GetJourneysJourneyTokenParametersMetadataParam): Promise<FetchResponse<200, types.GetJourneysJourneyTokenParametersResponse200>>;
    /**
     * Create a batch of journey applications by passing in a list of entities, grouped into
     * different applications
     * by the multi_entity_application_batch_key that can be optionally supplied for each
     * entity
     *
     *
     * @summary Create Journey Application Batch
     */
    postJourneysJourney_tokenBatches(body: types.PostJourneysJourneyTokenBatchesBodyParam, metadata: types.PostJourneysJourneyTokenBatchesMetadataParam): Promise<FetchResponse<202, types.PostJourneysJourneyTokenBatchesResponse202>>;
    /**
     * Get details about a specific journey application batch.
     *
     * @summary Get Journey Application Batch Summary
     */
    getJourneysJourney_tokenBatchesJourney_batch_token(metadata: types.GetJourneysJourneyTokenBatchesJourneyBatchTokenMetadataParam): Promise<FetchResponse<200, types.GetJourneysJourneyTokenBatchesJourneyBatchTokenResponse200>>;
    /**
     * Get list of journey applications for specified batch.
     *
     * @summary Get Batch Journey Applications
     */
    getJourneysJourney_tokenBatchesJourney_batch_tokenApplications(metadata: types.GetJourneysJourneyTokenBatchesJourneyBatchTokenApplicationsMetadataParam): Promise<FetchResponse<200, types.GetJourneysJourneyTokenBatchesJourneyBatchTokenApplicationsResponse200>>;
    /**
     * Create a note associated with the specified Journey Application
     *
     * @summary Create Journey Application Note
     */
    postJourneysJourney_tokenApplicationsJourney_application_tokenNotes(body: types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenNotesBodyParam, metadata: types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenNotesMetadataParam): Promise<FetchResponse<201, types.PostJourneysJourneyTokenApplicationsJourneyApplicationTokenNotesResponse201>>;
    /**
     * Retrieve all notes associated with the specified Journey Application
     *
     * @summary Get Journey Application Notes
     */
    getJourneysJourney_tokenApplicationsJourney_application_tokenNotes(metadata: types.GetJourneysJourneyTokenApplicationsJourneyApplicationTokenNotesMetadataParam): Promise<FetchResponse<200, types.GetJourneysJourneyTokenApplicationsJourneyApplicationTokenNotesResponse200>>;
    /**
     * Returns the set of all Lists for your account
     *
     * @summary Get all Lists
     */
    getLists(): Promise<FetchResponse<200, types.GetListsResponse200>>;
    /**
     * Create a new list with input metadata
     *
     * @summary Create a new list
     * @throws FetchError<403, types.PostListsResponse403> New list not allowed
     * @throws FetchError<409, types.PostListsResponse409> List name exists
     */
    postLists(body?: types.PostListsBodyParam): Promise<FetchResponse<201, types.PostListsResponse201>>;
    /**
     * Update list name or description
     *
     * @summary Update list metadata
     * @throws FetchError<404, types.PutListsListTokenMetaResponse404> The specified list does not exist
     * @throws FetchError<409, types.PutListsListTokenMetaResponse409> List name exists
     */
    putListsList_tokenMeta(body: types.PutListsListTokenMetaBodyParam, metadata: types.PutListsListTokenMetaMetadataParam): Promise<FetchResponse<201, types.PutListsListTokenMetaResponse201>>;
    putListsList_tokenMeta(metadata: types.PutListsListTokenMetaMetadataParam): Promise<FetchResponse<201, types.PutListsListTokenMetaResponse201>>;
    /**
     * Return all entities belonging to the specified List
     *
     * @summary Get one List's entities
     */
    getListsList_token(metadata: types.GetListsListTokenMetadataParam): Promise<FetchResponse<200, types.GetListsListTokenResponse200>>;
    /**
     * Add an individual to a List while leaving the rest of the List's records intact
     *
     * @summary Add an entity to a List
     */
    postListsList_token(body: types.PostListsListTokenBodyParam, metadata: types.PostListsListTokenMetadataParam): Promise<FetchResponse<200, types.PostListsListTokenResponse200>>;
    postListsList_token(metadata: types.PostListsListTokenMetadataParam): Promise<FetchResponse<200, types.PostListsListTokenResponse200>>;
    /**
     * Overwrite the entire List with the contents of the submitted array
     *
     * @summary Replace the entire List
     */
    putListsList_token(body: types.PutListsListTokenBodyParam, metadata: types.PutListsListTokenMetadataParam): Promise<FetchResponse<200, types.PutListsListTokenResponse200>>;
    putListsList_token(metadata: types.PutListsListTokenMetadataParam): Promise<FetchResponse<200, types.PutListsListTokenResponse200>>;
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
    postOauthBearer(body?: types.PostOauthBearerBodyParam, metadata?: types.PostOauthBearerMetadataParam): Promise<FetchResponse<200, types.PostOauthBearerResponse200>>;
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
    postOauthValidate(body: types.PostOauthValidateBodyParam): Promise<FetchResponse<200, types.PostOauthValidateResponse200>>;
    /**
     * Given a portfolio workflow specified by the Authorization header, the API will run a
     * portfolio evaluation.
     *
     *
     * @summary Runs a portfolio evaluation
     */
    postPortfolioEvaluations(body: types.PostPortfolioEvaluationsBodyParam, metadata?: types.PostPortfolioEvaluationsMetadataParam): Promise<FetchResponse<201, types.PostPortfolioEvaluationsResponse201>>;
    /**
     * List Published Attributes
     *
     */
    getPublishedAttributes(): Promise<FetchResponse<200, types.GetPublishedAttributesResponse200>>;
    /**
     * Create Published Attribute
     *
     * @throws FetchError<400, types.PostPublishedAttributesResponse400> There was a validation error when creating the published attribute.
     */
    postPublishedAttributes(body: types.PostPublishedAttributesBodyParam): Promise<FetchResponse<201, types.PostPublishedAttributesResponse201>>;
    /**
     * Get Published Attribute
     *
     * @throws FetchError<404, types.GetPublishedAttributesPublishedAttributeTokenResponse404> Unable to find the published attribute token.
     */
    getPublishedAttributesPublishedAttributeToken(metadata: types.GetPublishedAttributesPublishedAttributeTokenMetadataParam): Promise<FetchResponse<200, types.GetPublishedAttributesPublishedAttributeTokenResponse200>>;
    /**
     * Update Published Attribute
     *
     * @throws FetchError<404, types.PatchPublishedAttributesPublishedAttributeTokenResponse404> Unable to find the published attribute token.
     */
    patchPublishedAttributesPublishedAttributeToken(body: types.PatchPublishedAttributesPublishedAttributeTokenBodyParam, metadata: types.PatchPublishedAttributesPublishedAttributeTokenMetadataParam): Promise<FetchResponse<200, types.PatchPublishedAttributesPublishedAttributeTokenResponse200>>;
    /**
     * Get Published Attribute Values for an Entity
     *
     * @throws FetchError<400, types.GetPublishedAttributesPublishedAttributeTokenValuesResponse400> Must provide valid header (`alloy-entity-token` or `alloy-external-entity-id`)
     * @throws FetchError<404, types.GetPublishedAttributesPublishedAttributeTokenValuesResponse404> Unable to find published attribute with specified token
     */
    getPublishedAttributesPublishedAttributeTokenValues(metadata: types.GetPublishedAttributesPublishedAttributeTokenValuesMetadataParam): Promise<FetchResponse<200, types.GetPublishedAttributesPublishedAttributeTokenValuesResponse200>>;
    /**
     * Create Published Attribute Values
     *
     * @throws FetchError<404, types.PostPublishedAttributesPublishedAttributeTokenValuesResponse404> Unable to find published attribute with specified token
     */
    postPublishedAttributesPublishedAttributeTokenValues(body: types.PostPublishedAttributesPublishedAttributeTokenValuesBodyParam, metadata: types.PostPublishedAttributesPublishedAttributeTokenValuesMetadataParam): Promise<FetchResponse<201, types.PostPublishedAttributesPublishedAttributeTokenValuesResponse201> | FetchResponse<206, types.PostPublishedAttributesPublishedAttributeTokenValuesResponse206>>;
    /**
     * Retrieve a Review
     *
     */
    getEntitiesEntity_tokenReviewsReview_token(metadata: types.GetEntitiesEntityTokenReviewsReviewTokenMetadataParam): Promise<FetchResponse<200, types.GetEntitiesEntityTokenReviewsReviewTokenResponse200>>;
    /**
     * Add a Note to a Review.
     *
     */
    postEntitiesEntity_tokenReviewsReview_tokenNotes(body: types.PostEntitiesEntityTokenReviewsReviewTokenNotesBodyParam, metadata: types.PostEntitiesEntityTokenReviewsReviewTokenNotesMetadataParam): Promise<FetchResponse<200, types.PostEntitiesEntityTokenReviewsReviewTokenNotesResponse200>>;
    /**
     * Retrieve All Reviews for an Entity
     *
     */
    getEntitiesEntity_tokenReviews(metadata: types.GetEntitiesEntityTokenReviewsMetadataParam): Promise<FetchResponse<200, types.GetEntitiesEntityTokenReviewsResponse200>>;
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
    postEntitiesEntity_tokenReviews(body: types.PostEntitiesEntityTokenReviewsBodyParam, metadata: types.PostEntitiesEntityTokenReviewsMetadataParam): Promise<FetchResponse<200, types.PostEntitiesEntityTokenReviewsResponse200>>;
    /**
     * Create a Review for a Group.
     *
     */
    postGroupsGroup_tokenReviews(body: types.PostGroupsGroupTokenReviewsBodyParam, metadata: types.PostGroupsGroupTokenReviewsMetadataParam): Promise<FetchResponse<200, types.PostGroupsGroupTokenReviewsResponse200>>;
    /**
     * Add a Note to a Review Group.
     *
     */
    postGroupsGroup_tokenReviewsReview_tokenNotes(body: types.PostGroupsGroupTokenReviewsReviewTokenNotesBodyParam, metadata: types.PostGroupsGroupTokenReviewsReviewTokenNotesMetadataParam): Promise<FetchResponse<200, types.PostGroupsGroupTokenReviewsReviewTokenNotesResponse200>>;
    /**
     * Retrieves a Transaction by external transaction ID.
     *
     * @summary Get a transaction.
     */
    getTransactionsTransaction_id(metadata: types.GetTransactionsTransactionIdMetadataParam): Promise<FetchResponse<200, types.GetTransactionsTransactionIdResponse200>>;
    /**
     * Update a transaction.
     *
     */
    patchTransactionsTransaction_id(body: types.PatchTransactionsTransactionIdBodyParam, metadata: types.PatchTransactionsTransactionIdMetadataParam): Promise<FetchResponse<200, types.PatchTransactionsTransactionIdResponse200>>;
    patchTransactionsTransaction_id(metadata: types.PatchTransactionsTransactionIdMetadataParam): Promise<FetchResponse<200, types.PatchTransactionsTransactionIdResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
