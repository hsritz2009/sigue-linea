basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
})
