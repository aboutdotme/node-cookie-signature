node {
    service = 'node_cookie_signature'
    build.init {}

    stage 'Build'
    compose.build {}

    stage 'Test'
    compose.test {}

    // Post to slack
    build.success {}
}

