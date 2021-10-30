export const HttpConstants = {
    CONTINUE: {
        code: 100,
        message: 'Continue Processing'
    },
    SUCCESS: {
        code: 200,
        message: 'The request succeeded'
    },
    CREATED: {
        code: 201,
        message: 'The request succeeded, and a new resource created as a result'
    },
    ACCEPTED: {
        code: 202,
        message: 'The request has been received but not yet acted upon'
    },
    NO_CONTENT: {
        code: 204,
        message: 'There is no content to send for this request, but the headers may be useful'
    },
    RESET: {
        code: 205,
        message: 'Tells the user agent to reset the document which sent this request'
    },
    MOVED: {
        code: 301,
        message: 'The URL of the requested resource has been changed permanently'
    },
    MOVED_TEMP: {
        code: 302,
        message: 'Requested resource has been changed temporarily'
    },
    NOT_MODIFIED: {
        code: 304,
        message: 'Response has not been modified, so the client can continue to use the same cached version of the response'
    },
    REDIRECT_TEMP: {
        code: 307,
        message: 'Requested resource has been changed temporarily. Redirect to the provided URL'
    },
    REDIRECT: {
        code: 308,
        message: 'The URL of the requested resource has been changed permanently. Redirect to the provided URL'
    },
    BAD_REQUEST: {
        code: 400,
        message: 'The server could not understand the request due to invalid syntax.'
    },
    UNAUTHORIZED: {
        code: 401,
        message: 'Client must authenticate itself to get the requested response'
    },
    FORBIDDEN: {
        code: 403,
        message: 'Client does not have access rights to the content'
    },
    NOT_FOUND: {
        code: 404,
        message: 'The server can not find the requested resource'
    },
    NOT_ALLOWED: {
        code: 405,
        message: 'The request method is known by the server but is not supported by the target resource'
    },
    REQUEST_TIMEOUT: {
        code: 408,
        message: 'Request Timeout'
    },
    GONE: {
        code: 410,
        message: 'Requested content has been permanently deleted from server'
    },
    UNSUPPORTED_MEDIA: {
        code: 415,
        message: 'The media format of the requested data is not supported by the server'
    },
    TEAPOT: {
        code: 418,
        message: 'The media format of the requested data is not supported by the server'
    },
    ILLEGAL: {
        code: 451,
        message: 'The user agent requested a resource that cannot legally be provided'
    }
}